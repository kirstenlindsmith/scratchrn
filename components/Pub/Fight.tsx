/**
 * @format
 */

import React from 'react';

import { chooseRandom } from '../../shared/helpers';

import {
  SafeAreaView,
  // ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
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

const angryPhrases = [
  'GET BACK HERE!',
  'HOLD STILL!',
  'WISE GUY, EH?',
  'FUCK!',
];

const goadingPhrases = [
  'HA HA',
  'NICE AIM, ASSHOLE',
  'YOU BLIND?!',
  "I'M OVER HERE!",
];

const triumphantPhrases = ['I HAVE YOU NOW!', 'TAKE THAT!', 'DIE!'];

const hurtPhrases = ['OUCH!', 'OW!', 'THAT SMARTS!'];

const gestureConfig = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const Fight = (props: any) => {
  const board = [
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
  ];
  const [currentMan, setMan] = React.useState(ManDown);
  const [currentMob, setMob] = React.useState(MobDown);
  const [health, setHealth] = React.useState(3);
  const [mobHealth, setMobHealth] = React.useState(2);
  const [X, setX] = React.useState(3);
  const [Y, setY] = React.useState(2);
  const [mobX, setMobX] = React.useState(5);
  const [mobY, setMobY] = React.useState(6);
  const [mobBubbleText, setBubbleText] = React.useState('');
  const [missed, showMissed] = React.useState(false);
  const [whoMissed, setWhoMissed] = React.useState('');
  const [hit, setHit] = React.useState(false);
  const [whoWasHit, setWhoHit] = React.useState('');
  const [won, setWon] = React.useState(false);
  const [lost, setLost] = React.useState(false);

  const [withinRange, setWithinRange] = React.useState(
    Math.abs(Y - mobY) < 2 && Math.abs(X - mobX) < 2,
  );
  const buttonColor = withinRange ? '#c46868' : '#b0a9a9';

  const styles = gameStyles(
    Math.floor(Math.random() * 300) + 100,
    Math.floor(Math.random() * 280) + 40,
    mobX,
    mobY,
  );

  React.useEffect(() => {
    const drunkAttackInterval = setInterval(() => attack('man'), 4000);
    return () => clearInterval(drunkAttackInterval);
  }, []);

  React.useEffect(() => {
    setWithinRange(Math.abs(Y - mobY) < 2 && Math.abs(X - mobX) < 2);
  }, [X, Y, mobX, mobY]);

  React.useEffect(() => {
    if (missed && whoMissed === 'HE') {
      setBubbleText(chooseRandom(angryPhrases));
    } else if (missed && whoMissed === 'YOU') {
      setBubbleText(chooseRandom(goadingPhrases));
    } else if (hit && whoWasHit === 'YOU') {
      setBubbleText(chooseRandom(triumphantPhrases));
    } else if (hit && whoWasHit === 'HE') {
      setBubbleText(chooseRandom(hurtPhrases));
    } else {
      setBubbleText('');
    }
  }, [missed, whoMissed, hit, whoWasHit]);

  React.useEffect(() => {
    if (won) {
      Navigation.push(props.componentId, {
        component: {
          name: 'fightwon',
        },
      });
    } else if (lost) {
      Navigation.push(props.componentId, {
        component: {
          name: 'gameover',
        },
      });
    }
  }, [won, lost, props.componentId]);

  const onSwipe = (gestureName: any) => {
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
  console.log('HEALTH', health); //TODO: find the fucking console output
  //TODO: find out why the fucking dude wont hit the player

  const attack = (target: 'man' | 'mob') => {
    if (withinRange) {
      if (target === 'man') {
        // case 'man':
        if (health > 1) {
          setHealth(health - 1);
          setHit(true);
          setWhoHit('YOU');
          setTimeout(() => setHit(false), 800);
        } else {
          setLost(true);
        }
        // break;
      } else if (target === 'mob') {
        if (mobHealth > 1) {
          setMobHealth(mobHealth - 1);
          setHit(true);
          setWhoHit('HE');
          setTimeout(() => setHit(false), 800);
        } else {
          setWon(true);
        }
        //   break;
        // default:
        //   break;
      }
    } else if (!withinRange) {
      showMissed(true);
      setWhoMissed(target === 'man' ? 'HE' : 'YOU');
      setTimeout(() => showMissed(false), 800);
      if (target === 'man') {
        // setTimeout(moveMob, 3000);
        moveMob();
      }
    }
  };

  const renderTiles = (i: number, j: number) => {
    if (mobX === X && mobY === Y) {
      moveMob();
      return currentMan;
    } else if (Y === i && X === j) {
      return currentMan;
    } else if (mobY === i && mobX === j) {
      return currentMob;
    } else {
      return <Text style={styles.invisibleSquare}>O</Text>;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(dir) => onSwipe(dir)}
      onSwipeUp={() => onSwipe(SWIPE_UP)}
      onSwipeDown={() => onSwipe(SWIPE_DOWN)}
      onSwipeLeft={() => onSwipe(SWIPE_LEFT)}
      onSwipeRight={() => onSwipe(SWIPE_RIGHT)}
      config={gestureConfig}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.healthBar}>
          <Text style={styles.healthText}>YOU</Text>
          <View style={health > 0 ? styles.health : styles.emptyHealth} />
          <View style={health > 1 ? styles.health : styles.emptyHealth} />
          <View style={health > 2 ? styles.health : styles.emptyHealth} />
        </View>
        <View style={styles.healthBar}>
          <Text style={styles.healthText}>HIM</Text>
          <View style={mobHealth > 0 ? styles.health : styles.emptyHealth} />
          <View style={mobHealth > 1 ? styles.health : styles.emptyHealth} />
          <View style={mobHealth > 2 ? styles.health : styles.emptyHealth} />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.gestureContainer}>
            {won && <Text style={styles.gameOverText}>YOU WON!</Text>}
            {lost && <Text style={styles.gameOverText}>YOU LOST!</Text>}
            {!won &&
              !lost &&
              board.map((row, i) => (
                <View key={i} style={styles.boardRow}>
                  {row.map((position, j) => (
                    <View key={j} style={styles.boardTile}>
                      {renderTiles(i, j)}
                    </View>
                  ))}
                </View>
              ))}
          </View>
        </View>
        {!won && !lost && !!mobBubbleText.length && (
          <>
            <View style={styles.mobBubble}>
              <Text>{mobBubbleText}</Text>
            </View>
            <View style={styles.mobBubbleArm} />
          </>
        )}
        <View style={styles.actionButton}>
          <Button
            title="ATTACK"
            color={buttonColor}
            accessibilityLabel={
              withinRange
                ? 'Attack'
                : "You're too far away; this attack will miss"
            }
            onPress={() => attack('mob')}
          />
        </View>
        {missed && <Text style={styles.displayText}>{whoMissed} MISSED</Text>}
      </SafeAreaView>
    </GestureRecognizer>
  );
};

Fight.options = topBarOptions('Pub');

export default Fight;
