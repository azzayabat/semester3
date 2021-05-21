import React, {useRef} from 'react';
import {
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Animated,
} from 'react-native';

export const GestureAnimated = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    console.log('fadedin');
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    console.log('fadedou');
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.fadingContainer, {opacity: fadeAnim}]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.button}>
        <Button title="fade in" onPress={fadeIn}></Button>
        <Button title="fade out" onPress={fadeOut}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  fadingText: {
    fontSize: 28,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'yellow',
  },
});
