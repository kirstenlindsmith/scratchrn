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

const Polite = (props: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.mainTitle}>The Pub</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>"Excuse me sir..."</Text>
              <Text style={styles.sectionDescription}>
                You gently peel yourself away from him and explain that you're
                just a traveler, here to rest before moving on.The{' '}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Hedgeknight</Text> staggers
                toward you again, bumping into your bags and spilling a bit of
                ale on your shoes. He offers to buy you a drink, to ease your
                burden, saying he knows travelers have no coin.
              </Text>
              <View style={styles.button}>
                <Button
                  title="TELL HIM TO FUCK OFF"
                  color="#c46868"
                  accessibilityLabel="Tell him to fuck off"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Aggressive',
                      },
                    })
                  }
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="ACCEPT HIS OFFER"
                  color="#c46868"
                  accessibilityLabel="Accept his offer"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Drink',
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

Polite.options = topBarOptions('Pub');

export default Polite;
