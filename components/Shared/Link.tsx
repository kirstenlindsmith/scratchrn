import React from 'react';

import { Alert, Button, Linking } from 'react-native';

const Link = ({
  url,
  children,
  ...rest
}: { url: string; children: any } & any) => {
  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`I don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} {...rest} />;
};

export default Link;
