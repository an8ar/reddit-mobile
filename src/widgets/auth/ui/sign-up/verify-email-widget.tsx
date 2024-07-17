import React from 'react';

import { View, Text } from 'react-native';

import { CreateEmailForm, GoBackHeader } from '~/entities/auth';

export const VerifyEmailWidget = () => {
  return (
    <View className="p-2">
      <GoBackHeader />
      <View className="mt-10">
        <View>
          <Text className="text-center text-2xl font-semibold">Verify your email</Text>
          <Text className="text-center text-lg">Enter the 6 digit code we sent to you</Text>
        </View>
        <CreateEmailForm />
      </View>
    </View>
  );
};
