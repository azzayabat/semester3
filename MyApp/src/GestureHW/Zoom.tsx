import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  View,
  Animated,
  StyleSheet,
  PanResponder,
  useWindowDimensions,
} from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  State,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';

const Zoom = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const {width, height} = useWindowDimensions();
  const pointsDistance = ([xA, yA], [xB, yB]) => {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        // console.log(evt.nativeEvent.changedTouches)
        const touches = evt.nativeEvent.changedTouches;
        if (touches.length >= 2) {
          const [touchFirst, touchSecond] = touches;
          const distance = pointsDistance(
            [touchFirst.pageX, touchFirst.pageY],
            [touchSecond.pageX, touchSecond.pageY],
          );
          console.log(distance);
          const screenMovedPercent = distance / width;
          scale.setValue(1 + screenMovedPercent);
        } else {
          pan.setValue({
            x: gestureState.dx,
            y: gestureState.dy,
          });
        }
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },

      onPanResponderRelease: (evt, gestureState) => {
        Animated.stagger(100, [
          Animated.timing(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.timing(pan, {
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }),
        ]).start();

        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
    }),
  ).current;

  console.log(panResponder.panHandlers);
  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[
          styles.image,
          {
            transform: [
              {scale: scale},
              {translateX: pan.x},
              {translateY: pan.y},
            ],
          },
        ]}
        source={{uri: 'https://picsum.photos/id/1/200'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Zoom;
