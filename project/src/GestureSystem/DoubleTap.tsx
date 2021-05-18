import React from 'react';
import {StyleSheet, View, Animated, Alert} from 'react-native';
import {
  TapGestureHandler,
  State,
  LongPressGestureHandler,
} from 'react-native-gesture-handler';
import {event} from 'react-native-reanimated';

export const DoubleTap = () => {
  return (
    <View>
      <TapGestureHandler
        onHandlerStateChange={event => {
          if (event.nativeEvent.state == State.ACTIVE) {
            Alert.alert('tapped twice');
          }
        }}
        numberOfTaps={2}
        maxDist={500}>
        <View style={styles.box}>
          <View style={styles.view}></View>
        </View>
      </TapGestureHandler>
      <LongPressGestureHandler
        minDurationMs={1000}
        onHandlerStateChange={event => {
          if (event.nativeEvent.state === State.ACTIVE) {
            Alert.alert("I'm being pressed for so long");
          }
        }}>
        <View style={styles.view}></View>
      </LongPressGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    position: 'relative',
    top: 100,
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
