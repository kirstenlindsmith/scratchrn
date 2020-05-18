/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  // View,
  Text,
  StatusBar,
  // Button,
} from 'react-native';

// import { Navigation } from 'react-native-navigation';
import GestureRecognizer, {
  swipeDirections,
} from 'react-native-swipe-gestures';

import { styles, topBarOptions } from '../../shared/styles';

const Fight = (props: any) => {
  const [board, setBoard] = React.useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [direction, setDirection] = React.useState('');
  const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
  const [X, setX] = React.useState(3);
  const [Y, setY] = React.useState(1);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  React.useEffect(() => {
    const clearRow = Array(10).fill(0);
    const clearBoard = Array(10).fill(clearRow);
    clearBoard[Y][X] = 1;
    setBoard(clearBoard);
  }, [direction, X, Y]);

  const onSwipe = (gestureName: any) => {
    setDirection(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        if (Y > 0) setY(Y - 1);
        break;
      case SWIPE_DOWN:
        if (Y < 10) setY(Y + 1);
        break;
      case SWIPE_LEFT:
        if (X > 0) setX(X - 1);
        break;
      case SWIPE_RIGHT:
        if (X < 10) setY(X + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <GestureRecognizer
          onSwipe={(dir) => onSwipe(dir)}
          onSwipeUp={() => onSwipe(SWIPE_UP)}
          onSwipeDown={() => onSwipe(SWIPE_DOWN)}
          onSwipeLeft={() => onSwipe(SWIPE_LEFT)}
          onSwipeRight={() => onSwipe(SWIPE_RIGHT)}
          config={config}
          style={{
            backgroundColor: '#c46868',
            height: 300,
            display: 'flex',
            borderColor: 'blue',
            borderWidth: 1,
            marginTop: 50,
            marginHorizontal: 30,
            width: 300,
          }}>
          {board.map((row, i) => (
            <Text
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                borderColor: 'green',
                marginTop: 5,
                borderWidth: 1,
              }}>
              {row.map((position, j) => (
                <Text
                  key={j}
                  style={{
                    color: 'white',
                    marginHorizontal: 15,
                    minWidth: 20,
                    flex: 1,
                    borderColor: 'red',
                    borderWidth: 1,
                  }}>
                  {Y === i && X === j ? 'X' : '\t'}
                </Text>
              ))}
            </Text>
          ))}
          {/* <Text
            style={{
              color: 'white',
              borderColor: 'red',
              borderWidth: 1,
              marginHorizontal: 5,
            }}>
            {board}
          </Text> */}
        </GestureRecognizer>
      </SafeAreaView>
    </>
  );
};

Fight.options = topBarOptions('Pub');

export default Fight;
