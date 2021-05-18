// import React, {useEffect, useRef} from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Animated,
//   Text,
//   Easing,
// } from 'react-native';
// import {
//   Directions,
//   FlingGestureHandler,
//   State,
// } from 'react-native-gesture-handler';

// const Scale = () => {
//   const scale = useRef(new Animated.Value(1)).current;
//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(scale, {
//         toValue: 2,
//         useNativeDriver: false,
//         duration: 1000,
//       }),
//       Animated.timing(scale, {
//         toValue: 1,
//         useNativeDriver: false,
//         duration: 1000,
//       }),
//     ]).start();
//   }, []);
//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[
//           styles.square,
//           {
//             transform: [{scale: scale}],
//           },
//         ]}></Animated.View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
//   square: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontWeight: '700',
//     fontSize: 30,
//     color: 'red',
//   },
// });

// export default Scale;
