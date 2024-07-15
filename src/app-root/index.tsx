import React from 'react';

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack initialRouteName="(modals)/login">
          <Stack.Screen name="(modals)/login" options={{ presentation: 'modal' }} />

          <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
