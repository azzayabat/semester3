import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import StarFive from './Star';

const Homework = () => {
  //   const [count, setCount] = useState(0);
  //   const onPress = () => setCount(count + 1);

  return (
    <View style={{flex: 1, padding: 60}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <StarFive></StarFive>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <StarFive></StarFive>
        <StarFive></StarFive>
        <StarFive></StarFive>
      </View>
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <StarFive></StarFive>
        <StarFive></StarFive>
      </View>
    </View>
  );
};

export default Homework;
