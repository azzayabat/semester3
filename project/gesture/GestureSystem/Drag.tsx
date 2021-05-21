import React, {useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

export const Drag = () => {
  //   const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
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
        <Animated.View
          style={[
            styles.squire,
            {
              transform: [
                {translateX: translation.x},
                {translateY: translation.y},
              ],
            },
          ]}></Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  squire: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
