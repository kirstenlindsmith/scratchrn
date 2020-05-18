/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
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

import { styles, topBarOptions } from './shared/styles';

const App = (props: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.mainTitle}>Choose your whatever</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                You rub your eyes and yawn, weary from the day's long ride.
                You've finally reached a small town. Hungry, you look around for
                somewhere to eat and relax.
              </Text>
              <View style={styles.button}>
                <Button
                  title="GO TO THE INN"
                  color="#c46868"
                  accessibilityLabel="Go to the Inn"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Inn',
                      },
                    })
                  }
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="GO TO THE PUB"
                  color="#c46868"
                  accessibilityLabel="Go to the pub"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Pub',
                      },
                    })
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

App.options = topBarOptions('Home');

export default App;
