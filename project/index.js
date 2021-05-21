/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './App';
// import MovieApp from './pages/MovieApp';
import StarFive from './pages/Star';
import GestureTest from './pages/GestureTest';
import Homework from './pages/Homework';
import {Scale} from './gesture/GestureSystem/Scale';
import TapNavigation from './gesture/Navigation/TapNavigation';
import {Slider} from './gesture/GestureSystem/slider';
import Dragable from './gesture/GestureHW/Dragable';
import {Horizontal} from './gesture/GestureHW/Horizontal';
import {Diagnal} from './gesture/GestureHW/Diagnal';
import MovieApp from './gesture/GestureHW/MovieApp';
import FlatList from './gesture/FlatList/FlatList';
import {MovieSlider} from './gesture/GestureHW/MovieSlider';
// import Notification from './notification/Notification';
import Swipeable from './gesture/GestureHW/Swipeable';
import Swipe from './gesture/GestureHW/Swipe';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Swipeable);
