import React, {useRef} from 'react';
import {Animated, useWindowDimensions, View} from 'react-native';

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const GestureTest = () => {
  const touch = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const dimensions = useWindowDimensions();

  return (
    <View
      onStartShouldSetResponder={event => {
        console.log('tapped');
        return true;
      }}
      onResponderMove={event => {
        return touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        });
      }}
      onResponderTerminationRequest={() => {
        return true;
        // Animated.spring(touch, {
        //   toValue: {
        //
        //     y: 250 - CURSOR_HALF_SIDE_SIZE,
        //   },
        //   useNativeDriver: false,
        // }).start();
      }}
      style={{
        width: 300,
        height: 500,
        backgroundColor: 'red',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          left: touch.x,
          top: touch.y,
          height: CURSOR_SIDE_SIZE,
          width: CURSOR_SIDE_SIZE,
          borderRadius: CURSOR_HALF_SIDE_SIZE,
          backgroundColor: 'orange',
        }}></Animated.View>
    </View>
  );
};

export default GestureTest;
