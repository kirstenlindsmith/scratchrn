/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  // ScrollView,
  View,
  Text,
  StatusBar,
  // Button,
} from 'react-native';

// import { Navigation } from 'react-native-navigation';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  ManDown,
  ManUp,
  ManRight,
  ManLeft,
  MobDown,
  MobUp,
  MobRight,
  MobLeft,
} from '../../assets/images';

import { gameStyles, topBarOptions } from '../../shared/styles';

const SWIPE_UP = 'SWIPE_UP';
const SWIPE_DOWN = 'SWIPE_DOWN';
const SWIPE_LEFT = 'SWIPE_LEFT';
const SWIPE_RIGHT = 'SWIPE_RIGHT';

const Fight = () => {
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
  const [currentMan, setMan] = React.useState(ManDown);
  const [currentMob, setMob] = React.useState(MobDown);
  const [X, setX] = React.useState(3);
  const [Y, setY] = React.useState(1);
  const [mobX, setMobX] = React.useState(5);
  const [mobY, setMobY] = React.useState(9);

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
    moveMob();
    switch (gestureName) {
      case SWIPE_UP:
        if (Y > 0) {
          setMan(ManUp);
          setY(Y - 1);
        }
        break;
      case SWIPE_DOWN:
        if (Y < 9) {
          setMan(ManDown);
          setY(Y + 1);
        }
        break;
      case SWIPE_LEFT:
        if (X > 0) {
          setMan(ManLeft);
          setX(X - 1);
        }
        break;
      case SWIPE_RIGHT:
        if (X < 9) {
          setMan(ManRight);
          setX(X + 1);
        }
        break;
      default:
        break;
    }
  };

  const moveMob = () => {
    const possibleMoves = [];
    if (mobX > 0) {
      possibleMoves.push('left');
    }
    if (mobX < 9) {
      possibleMoves.push('right');
    }
    if (mobY > 0) {
      possibleMoves.push('up');
    }
    if (mobY < 9) {
      possibleMoves.push('down');
    }

    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    switch (randomMove) {
      case 'left':
        setMob(MobLeft);
        setMobX(mobX - 1);
        break;
      case 'right':
        setMob(MobRight);
        setMobX(mobX + 1);
        break;
      case 'up':
        setMob(MobUp);
        setMobY(mobY - 1);
        break;
      case 'down':
        setMob(MobDown);
        setMobY(mobY + 1);
        break;
      default:
        break;
    }
  };

  const renderTiles = (i: number, j: number) => {
    if (mobX === X && mobY === Y) {
      moveMob();
      return currentMan;
    }
    if (Y === i && X === j) {
      return currentMan;
    } else if (mobY === i && mobX === j) {
      return currentMob;
    } else {
      return <Text style={gameStyles.invisibleSquare}>O</Text>;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(dir) => onSwipe(dir)}
      onSwipeUp={() => onSwipe(SWIPE_UP)}
      onSwipeDown={() => onSwipe(SWIPE_DOWN)}
      onSwipeLeft={() => onSwipe(SWIPE_LEFT)}
      onSwipeRight={() => onSwipe(SWIPE_RIGHT)}
      config={config}>
      <View style={gameStyles.mainContainer}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={gameStyles.gestureContainer}>
            {board.map((row, i) => (
              <View key={i} style={gameStyles.boardRow}>
                {row.map((position, j) => (
                  <View key={j} style={gameStyles.boardTile}>
                    {renderTiles(i, j)}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </SafeAreaView>
      </View>
    </GestureRecognizer>
  );
};

Fight.options = topBarOptions('Pub');

export default Fight;
