import React from 'react';

import { Text } from 'react-native';

export const TermsAndConditions = () => {
  return (
    <Text className="mt-8 px-4 text-center font-light text-gray-500">
      By continuing, you agree to our{' '}
      <Text className="font-medium text-black underline">User Agreement</Text> and acknowledge that
      you understand the <Text className="font-medium text-black underline">Privacy Policy</Text>
    </Text>
  );
};
