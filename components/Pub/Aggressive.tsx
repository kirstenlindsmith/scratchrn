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

const Aggressive = (props: any) => {
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
              <Text style={styles.sectionTitle}>
                "Fuck off, leave me in peace."
              </Text>
              <Text style={styles.sectionDescription}>
                You glower at him, and turn to walk towards the bar. The{' '}
                <Text style={styles.highlight}>Hedgeknight</Text> blocks your
                path, pushing his tankard into you.
              </Text>
              <Text style={styles.sectionDivider} />
              <Text style={styles.sectionTitle}>
                "What the fuck did you say?"
              </Text>
              <Text style={styles.sectionDescription}>
                He spits when he talks, and fine mist covers on your face. You
                try to push past again, and the{' '}
                <Text style={styles.highlight}>Hedgeknight</Text> aims a punch
                at your head. You step aside easily and he stumbles a little.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.button}>
                <Button
                  title="HIT HIM BACK"
                  color="#c46868"
                  accessibilityLabel="Hit him back"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'fight',
                      },
                    })
                  }
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="IGNORE HIM"
                  color="#c46868"
                  accessibilityLabel="Ignore him"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'kickedout',
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

Aggressive.options = topBarOptions('Pub');

export default Aggressive;
