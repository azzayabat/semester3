import React, {useRef, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Animated} from 'react-native';
import {RotationGestureHandler, State} from 'react-native-gesture-handler';

export const Rotation = () => {
  const rotate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1,
        useNativeDriver: false,
        duration: 800,
      }),
      Animated.timing(rotate, {
        toValue: 1,
        useNativeDriver: false,
        duration: 1000,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                rotate: rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-370deg'],
                }),
              },
              {scale: scale},
            ],
          },
        ]}>
        <Text style={styles.text}>Rotate</Text>
      </Animated.View>
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
