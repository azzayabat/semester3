import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

export const Scale = () => {
  const border = useRef(new Animated.Value(40)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacityTop = useRef(new Animated.Value(0)).current;
  const opacityRight = useRef(new Animated.Value(0)).current;
  const opacityRightBottom = useRef(new Animated.Value(0)).current;
  const opacityLeftBottom = useRef(new Animated.Value(0)).current;
  const opacityGoal = useRef(new Animated.Value(0)).current;
  const touch = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const dimenstions = useWindowDimensions();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(border, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 3.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityTop, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityRight, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityLeftBottom, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityRightBottom, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityGoal, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  const onPress = () => {
    // console.log('pressse');
    // Animated.timing(touch, {
    //   toValue: {
    //     x: dimenstions.width / 2 - 50,
    //     y: dimenstions.height / 2 - 50,
    //   },
    //   duration: 3000,
    //   useNativeDriver: false,
    // }).start();
    Alert.alert(' button pressed');
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{scale: scale}],
            borderRadius: border,
          },
        ]}>
        {/* <Animated.View style={styles.squire}> */}
        {/* <TouchableHighlight> */}
        {/* <AnimatedTouchable> */}
        <Animated.View
          style={[
            styles.circle,
            {left: 5, top: 0, opacity: opacityTop, backgroundColor: 'red'},
          ]}>
          <Text style={{alignSelf: 'center'}}>A</Text>
        </Animated.View>
        {/* </AnimatedTouchable> */}
        {/* </TouchableHighlight> */}

        <Animated.View
          style={[
            styles.circle,
            {
              left: 70,
              top: 0,
              opacity: opacityRight,
              backgroundColor: 'purple',
            },
          ]}>
          <Text style={{alignSelf: 'center'}}>B</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.circle,
            {
              left: 5,
              top: 70,
              opacity: opacityRightBottom,
              backgroundColor: 'orange',
            },
          ]}>
          <Text style={{alignSelf: 'center'}}>C</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.circle,
            {
              left: 70,
              top: 70,
              opacity: opacityLeftBottom,
              backgroundColor: 'green',
            },
          ]}>
          <Text style={{alignSelf: 'center'}}>D</Text>
        </Animated.View>
        {/* <Animated.View style={styles.circle}></Animated.View>
          <Animated.View style={styles.circle}></Animated.View> */}
        {/* </Animated.View> */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  box: {
    // position: 'absolute',
    // backgroundColor: 'black',
    // marginTop: 10,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    // backgroundColor: 'red',
    borderColor: 'green',
    borderWidth: 0.3,
  },
});
