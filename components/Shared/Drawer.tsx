import React from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  Keyboard,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// import GestureRecognizer from 'react-native-swipe-gestures';

// const SWIPE_UP = 'SWIPE_UP';
// const SWIPE_DOWN = 'SWIPE_DOWN';
// const SWIPE_LEFT = 'SWIPE_LEFT';
// const SWIPE_RIGHT = 'SWIPE_RIGHT';

// const gestureConfig = {
//   velocityThreshold: 0.3,
//   directionalOffsetThreshold: 80,
// };

const Drawer = () => {
  const screenWidth = Math.round(Dimensions.get('window')?.width);
  const screenHeight = Math.round(Dimensions.get('window')?.height);
  const [animationPhase] = React.useState(new Animated.Value(0));
  const [keyboardOpen, toggleKeyboard] = React.useState(false);
  const [open, toggleDrawerOpen] = React.useState(false);
  const [opening, toggleOpening] = React.useState(false);
  const [vertical, updateVertical] = React.useState(screenHeight - 210);
  const [previousVertical, storePreviousVertical] = React.useState(vertical);

  const pan = React.useRef(new Animated.ValueXY({ x: 0, y: vertical })).current;

  console.log(
    '!!MAIN RENDER!! -> pan.y._value:',
    pan.y._value,
    'prev:',
    previousVertical,
  );

  //NOTE: https://reactnative.dev/docs/gesture-responder-system.html
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        toggleOpening(true);
        pan.setOffset({
          x: 0,
          y: 120, //previousVertical,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log('MOVE', vertical, previousVertical);
        // if (gestureState.vy > 0.2 && gestureState.vy < 0.3) {
        // if (!opening) {
        // }
        toggleOpening(true);
        // console.log('update vert on move');
        // updateVertical(previousVertical + gestureState.dy);
        // } else if (gestureState.vy < 0.2) {
        //   console.log('< 0.2, OPEN');
        //   toggleDrawerOpen(true);
        //   toggleOpening(false);
        // } else if (gestureState.vy > 0.3) {
        //   console.log('< 0.2, CLOSE');
        //   toggleDrawerOpen(false);
        //   toggleOpening(false);
        // }
        return Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        })(evt, gestureState);
      },
      // Animated.event([null, { dx: pan.x, dy: pan.y }], {
      //   useNativeDriver: false,
      // }),
      onPanResponderRelease: (evt, gestureState) => {
        toggleOpening(false);
        pan.flattenOffset();
        storePreviousVertical(vertical + gestureState.dy);
        if (gestureState.vy < 0.2) {
          // console.log('< 0.2: OPEN');
          if (!open) {
            toggleDrawerOpen(true);
            if (keyboardOpen) {
              console.log('0:', 0);
              storePreviousVertical(0);
            } else {
              // console.log('screenHeight * 0.2:', screenHeight * 0.2);
              storePreviousVertical(screenHeight * 0.2);
            }
          } else {
            // console.log('screenHeight - 200:', screenHeight - 200);
            storePreviousVertical(screenHeight - 200);
          }
          if (opening) {
            toggleOpening(false);
          }
        } else if (gestureState.vy > 0.3) {
          // console.log('> 0.3: CLOSE');
          toggleDrawerOpen(false);
          if (opening) {
            toggleOpening(false);
          }
        }

        // if (open && keyboardOpen) {
        // console.log('0', 0);
        // storePreviousVertical(0);
        // updateVertical(0);
        // } else if (open && !keyboardOpen) {
        // console.log('screenHeight * 0.2', screenHeight * 0.2);
        // storePreviousVertical(screenHeight * 0.2);
        // updateVertical(screenHeight * 0.2);
        // } else if (!open) {
        // console.log('screenHeight - 200', screenHeight - 200);
        // storePreviousVertical(screenHeight - 200);
        // updateVertical(screenHeight - 200);
        // }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;

  React.useEffect(() => {
    console.log(
      '\n',
      'in hook phase (pany & prevV):',
      pan.y._value,
      previousVertical,
      '\n',
      'open:',
      open,
      '\n',
      'opening:',
      opening,
      '\n',
      'keyboard:',
      keyboardOpen,
    );
    if (open && keyboardOpen) {
      Animated.timing(animationPhase, {
        toValue: 2,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
    } else if (open && !keyboardOpen) {
      Animated.timing(animationPhase, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
    } else if (!open) {
      Animated.timing(animationPhase, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
    }
  }, [open, opening, animationPhase, keyboardOpen]);

  // console.log('phase:', animationPhase, 'height:', screenHeight);

  // const onSwipe = (gestureName: string) => {
  //   switch (gestureName) {
  //     case SWIPE_UP:
  //       console.log('UP!');
  //       if (!open) {
  //         toggleDrawerOpen(true);
  //       }
  //       break;
  //     case SWIPE_DOWN:
  //       console.log('DOWN!');
  //       if (open && !keyboardOpen) {
  //         toggleDrawerOpen(false);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const animatedTranslateY = opening
    ? pan.y
    : open && keyboardOpen //tallest menu
    ? 0
    : open //middle-height menu
    ? screenHeight * 0.2
    : screenHeight - 200;
  // opening
  //   ? pan.y //vertical
  //   : animationPhase.interpolate({
  //       inputRange: [0, 1, 2],
  //       outputRange: [screenHeight - 200, screenHeight * 0.2, 0],
  //     });

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
      height: screenHeight,
      width: screenWidth,
    },
    drawer: {
      width: screenWidth,
      height: screenHeight,
      borderColor: 'blue',
      backgroundColor: '#e6e6e6',
      borderWidth: 2,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 300,
      height: 50,
      borderRadius: 5,
      borderColor: '#919191',
    },
  });

  return (
    // <GestureRecognizer
    //   onSwipe={(dir) => onSwipe(dir)}
    //   onSwipeUp={() => onSwipe(SWIPE_UP)}
    //   onSwipeDown={() => onSwipe(SWIPE_DOWN)}
    //   onSwipeLeft={() => onSwipe(SWIPE_LEFT)}
    //   onSwipeRight={() => onSwipe(SWIPE_RIGHT)}
    //   config={gestureConfig}>
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [
            {
              translateY: animatedTranslateY,
            },
            {
              perspective: 1000,
            },
          ],
          ...styles.drawer,
        }}>
        <View>
          <TextInput
            placeholder={'Type your message here'}
            style={styles.input}
            onSubmitEditing={() => {
              Keyboard.dismiss();
              toggleKeyboard(false);
            }}
            onFocus={() => toggleKeyboard(true)}
            // onKeyPress={() => toggleKeyboard(!keyboardOpen)}
          />
        </View>
      </Animated.View>
    </View>
    // </GestureRecognizer>
  );
};

export default Drawer;
