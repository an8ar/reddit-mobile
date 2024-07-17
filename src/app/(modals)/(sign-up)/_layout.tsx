import React from 'react';

import { Stack } from 'expo-router';

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="create-email"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verify-email"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="create-username"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;
