import {transform} from '@babel/core';
import React, {useRef} from 'react';
import {
  Animated,
  SafeAreaViewComponent,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {event} from 'react-native-reanimated';

const Dragable = () => {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  return (
    <SafeAreaView style={styles.container}>
      <View
        onStartShouldSetResponder={() => true}
        onResponderMove={event =>
          translation.setValue({
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          })
        }>
        <Animated.View
          style={[
            styles.circle,
            [{top: translation.y}, {left: translation.x}],
            {position: 'absolute'},
          ]}></Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
});

export default Dragable;
