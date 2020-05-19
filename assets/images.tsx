import React from 'react';
import { Image } from 'react-native';

const imageStyle = { width: 30, height: 30 };

export const ManDown = (
  <Image style={imageStyle} source={require('./manDown.png')} />
);
export const ManUp = (
  <Image style={imageStyle} source={require('./manUp.png')} />
);
export const ManRight = (
  <Image style={imageStyle} source={require('./manRight.png')} />
);
export const ManLeft = (
  <Image style={imageStyle} source={require('./manLeft.png')} />
);

export const MobDown = (
  <Image style={imageStyle} source={require('./mobDown.png')} />
);
export const MobUp = (
  <Image style={imageStyle} source={require('./mobUp.png')} />
);
export const MobRight = (
  <Image style={imageStyle} source={require('./mobRight.png')} />
);
export const MobLeft = (
  <Image style={imageStyle} source={require('./mobLeft.png')} />
);
