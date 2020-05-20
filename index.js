/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';

import {
  GameOver,
  Inn,
  Food,
  Room,
  Pub,
  Aggressive,
  Polite,
  Fight,
} from './components';

Navigation.registerComponent('home', () => App);
Navigation.registerComponent('inn', () => Inn);
Navigation.registerComponent('food', () => Food);
Navigation.registerComponent('room', () => Room);
Navigation.registerComponent('pub', () => Pub);
Navigation.registerComponent('aggressive', () => Aggressive);
Navigation.registerComponent('polite', () => Polite);
Navigation.registerComponent('fight', () => Fight);
Navigation.registerComponent('gameover', () => GameOver);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home',
            },
          },
        ],
      },
    },
  });
});
