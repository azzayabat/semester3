import React, {createRef} from 'react';
import {
  View,
  Animated,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  LongPressGestureHandler,
  PanGestureHandler,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
const doubleTap = React.createRef();

export const Tap = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TapGestureHandler
        onHandlerStateChange={({nativeEvent}) => {
          if (nativeEvent.state == State.ACTIVE) {
            Alert.alert('single tap');
          }
        }}
        numberOfTaps={1}
        waitFor={doubleTap}>
        <TapGestureHandler
          ref={doubleTap}
          onHandlerStateChange={event => {
            if (event.nativeEvent.state == State.ACTIVE) {
              Alert.alert('double tap');
            }
          }}
          numberOfTaps={2}>
          <LongPressGestureHandler
            ref={doubleTap}
            onHandlerStateChange={event => {
              if (event.nativeEvent.state == State.ACTIVE) {
                Alert.alert('Looooong tap!');
              }
            }}
            minDurationMs={1000}>
            <Animated.View style={styles.circle}>
              <Text style={styles.text}>Click here</Text>
            </Animated.View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </TapGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
