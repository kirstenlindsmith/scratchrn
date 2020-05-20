/**
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import { gameStyles, styles, topBarOptions } from '../../shared/styles';

const GameOver = (props: any) => {
  const computedStyles = gameStyles();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.centered}>
            <Text style={computedStyles.gameOverText}>GAME OVER</Text>

            <View style={computedStyles.restartButton}>
              <Button
                title="RESTART THE STORY"
                color="#c46868"
                accessibilityLabel="Restart the story"
                onPress={() =>
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'home',
                    },
                  })
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

GameOver.options = topBarOptions('Pub');

export default GameOver;
