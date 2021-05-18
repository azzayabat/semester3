import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  View,
  Animated,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StatusBar,
  useWindowDimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  State,
  TouchableOpacity,
  ScrollView,
} from 'react-native-gesture-handler';

import {Swipeable} from 'react-native-gesture-handler';

const DATA = [
  {
    key: '1',
    text: 'Item text 1',
    uri: 'https://picsum.photos/id/1/200',
  },
  {
    key: '2',
    text: 'Item text 2',
    uri: 'https://picsum.photos/id/10/200',
  },

  {
    key: '3',
    text: 'Item text 3',
    uri: 'https://picsum.photos/id/1002/200',
  },
];

const SliderCard = ({item, index, scrollX}) => {
  const dimensions = useWindowDimensions();
  const {width, height} = dimensions;
  const position = Animated.subtract(index * width, scrollX);
  const scale = position.interpolate({
    inputRange: [width * -1, 0, width],
    outputRange: [0, 1, 0],
  });
  const rotate = position.interpolate({
    inputRange: [width * -1, 0, width],
    outputRange: ['180deg', '0deg', '360deg'],
  });

  return (
    <ImageBackground
      style={{
        width: dimensions.width,
        height: '100%',
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      blurRadius={30}
      source={{uri: item.uri}}>
      <Animated.Image
        source={{uri: item.uri}}
        style={{
          width: 230,
          height: 350,
          borderRadius: 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 200,
            height: 3200,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          transform: [
            {
              scale: scale,
            },
            {
              rotate: rotate,
            },
          ],
        }}
      />
    </ImageBackground>
  );
};

const Slide = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const onScrollEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    {useNativeDriver: false},
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        pagingEnabled
        horizontal
        contentContainerStyle={
          {
            // flex: 1,
          }
        }
        // contentContainerStyle={{

        // }}
        // onScroll={(event) => {
        //   scrollX.setValue(event.nativeEvent.contentOffset.x);
        // }}
        onScroll={onScrollEvent}
        data={DATA}
        renderItem={({index, item}) => {
          return <SliderCard index={index} item={item} scrollX={scrollX} />;
        }}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Slide;
