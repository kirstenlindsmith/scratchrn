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

import { styles, topBarOptions } from '../../shared/styles';

const Inn = (props: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.mainTitle}>The Inn</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                "Welcome, looking for a bite to eat, maybe?"
              </Text>
              <Text style={styles.sectionDescription}>
                The <Text style={styles.highlight}>Innkeeper</Text> smiles up at
                you. A squat, portly woman of middle years, she brandishes a
                wooden spoon like a nightstick and spits onto the floor.
              </Text>
              <View style={styles.button}>
                <Button
                  title="ASK FOR FOOD"
                  color="#c46868"
                  accessibilityLabel="Ask for food"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Food',
                      },
                    })
                  }
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="ASK FOR A ROOM"
                  color="#c46868"
                  accessibilityLabel="Ask for a room"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Room',
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

Inn.options = topBarOptions('Inn');

export default Inn;
