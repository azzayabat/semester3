import React, {useState} from 'react';
import Gesture from './Gesture';
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Switch,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  starfive: {
    width: 75,
    height: 75,
  },
  starfiveTop: {
    position: 'absolute',
    top: -22,
    left: 18,
  },
  starfiveBefore: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 35,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    transform: [{rotate: '35deg'}],
  },
  starfiveAfter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: -12,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 35,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    transform: [{rotate: '-35deg'}],
  },
});

const stylesChange = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'green',
  },
  starfive: {
    width: 75,
    height: 75,
  },
  starfiveTop: {
    position: 'absolute',
    top: -22,
    left: 18,
  },
  starfiveBefore: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 35,
    borderBottomColor: 'green',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    transform: [{rotate: '35deg'}],
  },
  starfiveAfter: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: -12,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 35,
    borderBottomColor: 'green',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    transform: [{rotate: '-35deg'}],
  },
});

const TriangleUp = props => {
  return <View style={[styles.triangle, props.style]} />;
};

const StarFive = () => {
  const [pressed, setPressed] = useState(true);
  const onPress = () => {
    setPressed(false);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={pressed ? styles.starfive : stylesChange.starfive}>
        <TriangleUp
          style={pressed ? styles.starfiveTop : stylesChange.starfiveTop}
        />
        <View
          style={pressed ? styles.starfiveBefore : stylesChange.starfiveBefore}
        />
        <View
          style={pressed ? styles.starfiveAfter : stylesChange.starfiveAfter}
        />
      </View>
    </TouchableOpacity>

    // <View>
    //   <Gesture>
    //     <View>
    //       <Text>Swipe Swipe Swipe Swipe Swipe Swipe Swipe</Text>
    //     </View>
    //   </Gesture>
    // </View>
  );
};

export default StarFive;
