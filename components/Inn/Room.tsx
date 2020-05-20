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
  Linking,
  Platform,
} from 'react-native';

import { styles, topBarOptions } from '../../shared/styles';

const Room = (props: any) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                "I'll take a room for the night, if you've got one."
              </Text>
              <Text style={styles.sectionDescription}>
                You rummage for your coinpurse. After exchanging a few coppers,
                you follow the <Text style={styles.highlight}>Innkeeper</Text>{' '}
                upstairs to an available room. You close the door behind you and
                listen to her steps creaking back down the stairs.
              </Text>
              <View style={styles.button}>
                <Button
                  title="TEXT YOUR FRIEND KIRSTEN"
                  color="#c46868"
                  accessibilityLabel="Open SMS"
                  onPress={() =>
                    Linking.openURL(
                      `sms:${+14135480611}${
                        Platform.OS === 'ios' ? '&' : '?'
                      }body=${'HI FRIEND!!!'}`,
                    )
                  }
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="CALL YOUR FRIEND KIRSTEN"
                  color="#c46868"
                  accessibilityLabel="Open SMS"
                  onPress={() => Linking.openURL(`tel:${+14135480611}`)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Room.options = topBarOptions('Inn');

export default Room;
