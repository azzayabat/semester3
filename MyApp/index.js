/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Navigation/App';
import {GestureAnimated} from './src/GestureSystem/GestureAnimated';
import {AnimatedSquire} from './src/GestureSystem/AnimatedSquire';
import {Scale} from './src/GestureSystem/Scale';
import {DoubleTap} from './src/GestureSystem/DoubleTap';
import Dragable from './src/GestureSystem/DragAble';
import {Drag} from './src/GestureSystem/Drag';
import {ProgressBar} from './src/GestureSystem/ProgressBar';
import ScaleAndRotate from './src/GestureSystem/ScaleAndRotate';

// Homeworks
import {Tap} from './src/GestureHW/Tap';
import Zoom from './src/GestureHW/Zoom';
import {Rotation} from './src/GestureHW/Rotation';
import ScaleHW from './src/GestureHW/Scale';
import {Fling} from './src/GestureHW/Fling';
import {Flip} from './src/GestureHW/Flip';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Flip);
