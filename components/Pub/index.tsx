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

const Pub = (props: any) => {
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
                "Oy! I haven't seen you around here before..."
              </Text>
              <Text style={styles.sectionDescription}>
                A drunken <Text style={styles.highlight}>Hedgeknight</Text>{' '}
                standing at the end of the bar staggers a few paces over to you
                and claps a heavy arm around your shoulders and leans in so his
                face is level with yours. His breath is rancid.
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
                  title="POLITELY TELL HIM TO FUCK OFF"
                  color="#c46868"
                  accessibilityLabel="Politely tell him to fuck off"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'Polite',
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

Pub.options = topBarOptions('Pub');

export default Pub;
