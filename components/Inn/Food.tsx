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
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import Link from '../Shared/Link';
import { styles, topBarOptions } from '../../shared/styles';

const Food = (props: any) => {
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
                "I'd love some food. I'll have whatever's cooking."
              </Text>
              <Text style={styles.sectionDescription}>
                You smile back at the{' '}
                <Text style={styles.highlight}>Innkeeper</Text> (but refrain
                from spitting, yourself). She leads you to an empty bench seat
                and calls the serving girl over with a bowl of stew. You pass
                over your coin and sit down to eat. As you eat, you take a look
                around the common room...
              </Text>
              <View style={styles.button}>
                <Button
                  title="EXAMINE THE OTHER PATRONS"
                  color="#c46868"
                  accessibilityLabel="Examine the other patrons"
                  onPress={() =>
                    Navigation.push(props.componentId, {
                      component: {
                        name: 'patrons',
                      },
                    })
                  }
                />
              </View>
              <View style={styles.button}>
                <Link
                  url={
                    'https://gamepedia.cursecdn.com/wowpedia/thumb/5/57/Lion%27s_Pride_Inn_interior.jpg/1200px-Lion%27s_Pride_Inn_interior.jpg'
                  }
                  color="#c46868"
                  accessibilityLabel="Examine the objects in the room">
                  EXAMINE THE OBJECTS IN THE ROOM
                </Link>
              </View>
              <View style={styles.button}>
                <Button
                  title="EXAMINE THE FOURTH WALL"
                  color="#c46868"
                  accessibilityLabel="Open settings"
                  onPress={React.useCallback(async () => {
                    await Linking.openSettings();
                  }, [])}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Food.options = topBarOptions('Inn');

export default Food;
