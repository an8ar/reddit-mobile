import React from 'react';

import { View, Text } from 'react-native';

import { AuthHeader, LoginForm, TermsAndConditions } from '~/entities/auth';

export const LoginWidget = () => {
  return (
    <View className="p-2">
      <AuthHeader isLogin={true} />
      <View className="mt-10">
        <Text className="text-center text-2xl font-semibold">Log in</Text>
        <TermsAndConditions />
        <LoginForm />
      </View>
    </View>
  );
};
