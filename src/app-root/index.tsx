import React from 'react';

import { Provider } from 'react-redux';

import { UserDrawerContent } from '~/entities/user';
import { RightDrawerScreen } from '~/shared';

import { store } from './store';

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
