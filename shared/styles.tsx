import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
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

export const gameStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  gestureContainer: {
    backgroundColor: '#c9a693',
    height: 370,
    width: 355,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 30,
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
    // borderColor: 'red',
    // borderWidth: 1,
  },
  invisibleSquare: {
    color: 'transparent',
    opacity: 0,
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
