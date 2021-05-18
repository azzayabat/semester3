import React, {useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

export const Percentage = (props: any) => {
  const width = new Animated.Value(0);

  console.log(props.percentage);
  return <Animated.View style={styles.progress}></Animated.View>;
};

export const ProgressBar = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.bar}>
        <Percentage percentage={count}></Percentage>
      </View>
      <Button title="click here" onPress={() => setCount(count + 10)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    height: 30,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  progress: {
    backgroundColor: 'blue',
  },
  count: {
    alignItems: 'center',
  },
});
