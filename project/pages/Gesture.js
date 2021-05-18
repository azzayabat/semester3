import React from 'react';
import {View} from 'react-native';

export default class MyGesture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_x: 0,
      start_y: 0,
      is_swipeing: false,
      swipe_direction: '',
    };
  }

  render() {
    return (
      <View
        style={[
          this.props.style,
          this.state.is_swipeing ? {opacity: 0.5} : {},
          this.state.swipe_direction == 'RIGHT'
            ? {backgroundColor: '#CCCCCC'}
            : {},
        ]}
        onStartShouldSetResponder={evt => {
          console.log('onStartShouldSetResponder');
          return true;
        }}
        onResponderTerminationRequest={evt => {
          console.log('onResponderTerminationRequest');
          if (
            this.state.swipe_direction == 'RIGHT' ||
            this.state.swipe_direction == 'LEFT'
          ) {
            console.log('dont let go!!!');
            return false;
          }
          console.log('give it up');
          return true;
        }}
        onResponderTerminate={evt => {
          console.log('onResponderTerminate');
          this.setState({
            is_swipeing: false,
            start_x: null,
            start_y: null,
            swipe_direction: null,
          });
        }}
        onResponderGrant={evt => {
          console.log('onResponderGrant');
          this.setState({
            is_swipeing: true,
            start_x: evt.nativeEvent.locationX,
            start_y: evt.nativeEvent.locationY,
            swipe_direction: null,
          });
        }}
        onResponderMove={evt => {
          var dx = evt.nativeEvent.locationX - this.state.start_x;
          var dy = evt.nativeEvent.locationY - this.state.start_y;
          if (Math.abs(dx) > Math.abs(dy)) {
            // big delta X
            if (dx > 40) {
              // swiping right
              if (this.state.swipe_direction != 'RIGHT') {
                console.log('Swipeing right');
                this.setState({swipe_direction: 'RIGHT'});
              }
            } else if (dx < -40) {
              //swiping left
              if (this.state.swipe_direction != 'LEFT') {
                console.log('Swipeing left');
                this.setState({swipe_direction: 'LEFT'});
              }
            } else {
              if (this.state.swipe_direction != null) {
                console.log('Not swipeing');
                this.setState({swipe_direction: null});
              }
            }
          } else if (Math.abs(dy) > Math.abs(dx)) {
            // big delta Y
            if (dy > 40) {
              // swiping down
              if (this.state.swipe_direction != 'DOWN') {
                console.log('Swipeing down');
                this.setState({swipe_direction: 'DOWN'});
              }
            } else if (dy < -40) {
              //swiping up
              if (this.state.swipe_direction != 'UP') {
                console.log('Swipeing up');
                this.setState({swipe_direction: 'UP'});
              }
            } else {
              if (this.state.swipe_direction != null) {
                console.log('Not swipeing');
                this.setState({swipe_direction: null});
              }
            }
          }
        }}
        onResponderRelease={evt => {
          switch (this.state.swipe_direction) {
            case 'UP': {
              if (this.props.onSwipeUp) {
                this.props.onSwipeUp();
              }
              break;
            }
            case 'DOWN': {
              if (this.props.onSwipeDown) {
                this.props.onSwipeDown();
              }
              break;
            }
            case 'LEFT': {
              if (this.props.onSwipeLeft) {
                this.props.onSwipeLeft();
              }
              break;
            }
            case 'RIGHT': {
              if (this.props.onSwipeRight) {
                this.props.onSwipeRight();
              }
              break;
            }
            default: {
              if (this.props.onPress) {
                this.props.onPress();
              }
              break;
            }
          }
          this.setState({
            is_swipeing: false,
            start_x: null,
            start_y: null,
            swipe_direction: null,
          });
        }}>
        {this.props.children}
      </View>
    );
  }
}
