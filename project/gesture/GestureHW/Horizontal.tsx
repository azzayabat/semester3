import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Animated,
} from 'react-native';

export const Horizontal = () => {
  const width = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const dimenstions = useWindowDimensions();

  useEffect(() => {
    Animated.timing(width, {
      toValue: {
        x: dimenstions.width,
        y: dimenstions.height,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.shape, {left: width.x, top: width.y}]}></Animated.View>
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
    backgroundColor: 'yellow',
    borderRadius: 50,
  },
});
