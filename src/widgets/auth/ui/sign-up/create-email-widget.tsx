import React from 'react';

import { View, Text } from 'react-native';

import { AuthHeader, CreateEmailForm } from '~/entities/auth';

export const CreateEmailWidget = () => {
  return (
    <View className="p-2">
      <AuthHeader isLogin={false} />
      <View className="mt-10">
        <View>
          <Text className="text-center text-2xl font-semibold">Hi new fiend,</Text>
          <Text className="text-center text-2xl font-semibold">welcome to Reddit</Text>
        </View>
        <CreateEmailForm />
      </View>
    </View>
  );
};
