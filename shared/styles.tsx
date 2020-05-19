import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 20,
    paddingHorizontal: 24,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#333333',
  },
  sectionDivider: {
    marginTop: -8,
  },
  highlight: {
    fontWeight: '700',
    color: '#c46868',
  },
  button: {
    display: 'flex',
    marginTop: 20,
  },
});

export const gameStyles = (
  missedTextTop?: number,
  missedTextLeft?: number,
  mobX?: number,
  mobY?: number,
) =>
  StyleSheet.create({
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    gestureContainer: {
      backgroundColor: '#c9a693',
      height: 355,
      width: 355,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30,
      marginVertical: 5,
      // borderColor: 'blue',
      // borderWidth: 1,
    },
    boardRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      // borderColor: 'green',
      // borderWidth: 1,
    },
    boardTile: {
      color: 'white',
      height: 35,
      width: 35,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
    },
    invisibleSquare: {
      color: 'transparent',
      opacity: 0,
    },
    displayText: {
      color: '#a15050',
      position: 'absolute',
      fontWeight: 'bold',
      top: missedTextTop || 100,
      left: missedTextLeft || 40,
    },
    mobBubble: {
      backgroundColor: 'white',
      color: '#333',
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 15,
      paddingVertical: 5,
      paddingHorizontal: 10,
      position: 'absolute',
      top: 25 + 35 * (mobY || 0),
      left: 45 + 35 * (mobX || 0),
    },
    mobBubbleArm: {
      height: 15,
      width: 50,
      borderRightColor: '#333',
      borderRightWidth: 2,
      borderRadius: 10,
      position: 'absolute',
      top: 55 + 35 * (mobY || 0),
      left: 20 + 35 * (mobX || 0),
    },
    health: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#c46868',
      marginHorizontal: 5,
    },
    emptyHealth: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'gray',
      marginHorizontal: 5,
    },
    healthBar: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
      marginLeft: 30,
      alignItems: 'center',
    },
    healthText: {
      fontWeight: 'bold',
    },
    gameOverText: {
      color: '#a15050',
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginTop: 50,
      marginBottom: 30,
    },
    actionButton: {
      marginLeft: 28,
      marginVertical: 10,
      width: 355,
    },
    restartButton: {
      width: 200,
    },
  });

export const topBarOptions = (page: any) => ({
  topBar: {
    title: {
      text: page || '',
      color: 'white',
    },
    background: {
      color: '#c46868',
    },
  },
});
