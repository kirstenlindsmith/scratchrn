import React from 'react';

import { Linking } from 'react-native';

export const useInitialURL = () => {
  const [url, setUrl] = React.useState<string | null>(null);
  const [processing, setProcessing] = React.useState(true);

  React.useEffect(() => {
    const getUrlAsync = async () => {
      // Get the deeplink used to open the app
      const initialUrl = await Linking.getInitialURL();
      setUrl(initialUrl);
      setProcessing(false);
    };

    getUrlAsync();
  }, []);

  return { url, processing };
};
