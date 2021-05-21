import React, {useEffect, useRef} from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  Animated,
  useWindowDimensions,
} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

import {} from 'react-native-gesture-handler';

export const AnimatedSquire = () => {
  const dimenstions = useWindowDimensions();

  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  // const leftAnim = new Animated.Value((pan.width / 2) - 50);
  // const topAnim = new Animated.Value(pan.height / 2 - 50);
  useEffect(() => {
    Animated.sequence([
      Animated.timing(pan, {
        toValue: {
          x: dimenstions.width - 100,
          y: 0,
        },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(pan, {
        toValue: {
          x: dimenstions.width - 100,
          y: dimenstions.height - 50,
        },
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(pan, {
        toValue: {
          x: 0,
          y: dimenstions.height - 50,
        },
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(pan, {
        toValue: {
          x: 0,
          y: 0,
        },
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {left: pan.x, top: pan.y}]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
});
