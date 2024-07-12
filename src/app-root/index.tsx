import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { RightDrawerScreen } from '~/shared';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RightDrawerScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
