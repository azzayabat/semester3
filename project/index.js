/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './App';
import MovieApp from './pages/MovieApp';
import StarFive from './pages/Star';
import GestureTest from './pages/GestureTest';
import Homework from './pages/Homework';
import {Scale} from './src/GestureSystem/Scale';
import TapNavigation from './src/Navigation/TapNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TapNavigation);
