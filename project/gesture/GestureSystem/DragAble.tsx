import React, {useRef} from 'react';
import {View, Text, Animated, StyleSheet, Alert} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
  LongPressGestureHandler,
  State,
} from 'react-native-gesture-handler';

const Dragable = () => {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  // console.log(translation);
  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={event => {
          console.log(event.nativeEvent);
          const {translationX, translationY} = event.nativeEvent;
          translation.setValue({
            x: translationX,
            y: translationY,
          });
        }}>
        <LongPressGestureHandler
          minDurationMs={800}
          onHandlerStateChange={event => {
            if (event.nativeEvent.state == State.ACTIVE) {
              Alert.alert('loooong pressed');
            }
          }}>
          <TapGestureHandler
            onHandlerStateChange={event => {
              if (event.nativeEvent.state == State.ACTIVE) {
                Alert.alert('tapped twice');
              }
            }}
            numberOfTaps={3}
            maxDist={500}>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: [
                    {translateX: translation.x},
                    {translateY: translation.y},
                  ],
                },
              ]}
            />
          </TapGestureHandler>
        </LongPressGestureHandler>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
export default Dragable;
