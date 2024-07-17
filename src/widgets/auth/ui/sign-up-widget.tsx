import React from 'react';

import { View, Text } from 'react-native';

import { AuthHeader, LoginForm, TermsAndConditions } from '~/entities/auth';

export const SignUpWidget = () => {
  return (
    <View className="p-2">
      <AuthHeader isLogin={false} />
      <View className="mt-10">
        <Text className="text-center text-2xl font-semibold">SignUp</Text>
        <TermsAndConditions />
        <LoginForm />
      </View>
    </View>
  );
};
