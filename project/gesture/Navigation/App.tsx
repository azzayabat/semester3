import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: {message?: string} | undefined;
  Profile: {userId: string} | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenProp = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type LeapViewType = {
  title: string;
  text: string;
  size?: number | string;
};
type TestType = {
  name: string;
  phone: number;
};

const LeapView: React.FC<LeapViewType> = props => {
  const {title, text} = props;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const HomeScreen: React.FC<HomeScreenProp> = ({navigation}) => {
  return (
    <View>
      <Text> HomeScreen</Text>
      <Button
        title="Home screen"
        onPress={() => {
          console.log('pressed on homepage');
          navigation.navigate('Profile', {userId: 'azzaya'});
        }}></Button>
    </View>
  );
};

const ProfileScreen: React.FC<{
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}> = ({navigation, route}) => {
  const userId = route.params?.userId;
  return (
    <View>
      <Text> ProfileScreen</Text>
      <Text>{userId}</Text>
      <Button
        title="Profile screen"
        onPress={() => {
          console.log('pressed');
          navigation.navigate('Home');
        }}></Button>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <View>
  //     <LeapView title="title" text="hello leap student"></LeapView>
  //   </View>
  // );
};
export default App;

// HOOKS
// const [user, setUser] = useState<TestType>();
// type User = {
//   name: string;
//   phone: number;
// };
