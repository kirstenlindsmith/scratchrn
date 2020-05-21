import React from 'react';
import { Navigation } from 'react-native-navigation';
import { useInitialURL } from '../hooks';
import { View, Text } from 'react-native';

import { VIEWS } from '../index';

const DeepLinkRouter = ({
  showLink,
  componentId,
  children,
}: {
  showLink?: boolean;
  componentId: string;
  children: any;
} & any) => {
  const { url: initialUrl, processing } = useInitialURL();

  const destination = initialUrl?.slice(initialUrl.indexOf('/page') + 6);
  if (
    destination &&
    VIEWS.some((page) => page === destination?.toLowerCase())
  ) {
    Navigation.push(componentId, {
      component: {
        name: destination.toLowerCase(),
      },
    });
  }

  return (
    <>
      {showLink && (
        <View>
          <Text>
            {processing
              ? 'Processing deeplink'
              : initialUrl
              ? `URL: ${initialUrl}`
              : ''}
          </Text>
          {children || null}
        </View>
      )}
    </>
  );
};

export default DeepLinkRouter;
