import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  useWindowDimensions,
} from 'react-native';

export const Diagnal = () => {
  const dimenstions = useWindowDimensions();
  const diagnal = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    Animated.timing(diagnal, {
      toValue: {
        x: dimenstions.width - 100,
        y: dimenstions.height - 100,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  });
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.shape,
          {top: diagnal.x, left: diagnal.y},
        ]}></Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shape: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
});
