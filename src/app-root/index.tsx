import React from 'react';

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="(modals)"
            options={{
              presentation: 'fullScreenModal',
              headerShown: false,
            }}
          />

          <Stack.Screen name="(drawers)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
