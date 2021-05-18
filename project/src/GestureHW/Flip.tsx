import React, {useEffect, useRef} from 'react';
import {Alert, SafeAreaView, StyleSheet, Animated} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';

export const Flip = () => {
  const flip = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(flip, {
      toValue: 2,
      useNativeDriver: false,
      duration: 1000,
    }).start();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                rotateY: flip.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: ['0deg', '-360deg', '-720deg'],
                }),
              },
            ],
          },
        ]}></Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 30,
  },
});
