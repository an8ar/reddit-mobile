import React from 'react';

import { Stack } from 'expo-router';

const ModalsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: 'auth',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: 'auth',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModalsLayout;
