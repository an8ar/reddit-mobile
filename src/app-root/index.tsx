import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

import { View, Text } from 'react-native';
import { RightDrawerScreen } from '~/shared';
import { UserDrawerContent } from '~/entities/user';

const App = () => {
  return (
    <Provider store={store}>
      <RightDrawerScreen>
        <UserDrawerContent />
      </RightDrawerScreen>
    </Provider>
  );
};

export default App;
