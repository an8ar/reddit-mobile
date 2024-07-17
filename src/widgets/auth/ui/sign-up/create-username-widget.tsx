import React from 'react';

import { View, Text } from 'react-native';

import { CreateUsernameForm, GoBackHeader } from '~/entities/auth';

export const CreateUsernameWidget = () => {
  return (
    <View className="p-2">
      <GoBackHeader />
      <View className="mt-10">
        <View>
          <Text className="text-center text-2xl font-semibold">Create your username</Text>
          <Text className="text-center text-lg">Most redditors use an anonymous username.</Text>
          <Text className="text-center text-lg">You won't be able to change it later.</Text>
        </View>
        <CreateUsernameForm />
      </View>
    </View>
  );
};
