import React, {useEffect, useRef, useState} from 'react';
import {Alert, View, Animated, Text, Button, StyleSheet} from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  LongPressGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

const Tap = () => {
  const doubleTapRef = React.createRef();
  const onSingleTap = (event: LongPressGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log(event.nativeEvent.state === State.ACTIVE);
      Alert.alert("I'm touched");
    }
  };
  return (
    <TapGestureHandler
      onHandlerStateChange={onSingleTap}
      waitFor={doubleTapRef}>
      <TapGestureHandler ref={doubleTapRef} numberOfTaps={2}>
        <View style={styles.box} />
      </TapGestureHandler>
    </TapGestureHandler>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});

export default Tap;
