import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

// messaging()
//   .getToken()
//   .then(token => {
//     console.log('fcm token.......', token);
//   });

messaging()
  .subscribeToTopic('dailyNews')
  .then(() => console.log('Subscribed to topic!'));

function Notification() {
  const [message, setMessage] = useState<string>('');
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log('json', JSON.stringify(remoteMessage));
      setMessage(JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}

export default Notification;
