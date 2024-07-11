import React from 'react';

import { Provider } from 'react-redux';

import { RightDrawerScreen } from '~/shared';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RightDrawerScreen />
    </Provider>
  );
};

export default App;
