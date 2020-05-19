/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';

import GameOver from './components/GameOver';

import Inn from './components/Inn';
import Food from './components/Inn/Food';

import Pub from './components/Pub';
import Aggressive from './components/Pub/Aggressive';
import Polite from './components/Pub/Polite';
import Fight from './components/Pub/Fight';

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('Inn', () => Inn);
Navigation.registerComponent('Food', () => Food);
Navigation.registerComponent('Pub', () => Pub);
Navigation.registerComponent('Aggressive', () => Aggressive);
Navigation.registerComponent('Polite', () => Polite);
Navigation.registerComponent('Fight', () => Fight);
Navigation.registerComponent('GameOver', () => GameOver);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
