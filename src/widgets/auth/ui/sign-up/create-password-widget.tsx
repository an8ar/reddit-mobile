import React from 'react';

import { View, Text } from 'react-native';

import { CreatePasswordForm, GoBackHeader } from '~/entities/auth';

export const CreatePasswordWidget = () => {
  return (
    <View className="p-2">
      <GoBackHeader />
      <View className="mt-10">
        <View>
          <Text className="text-center text-2xl font-semibold">Set a password</Text>
        </View>
        <CreatePasswordForm />
      </View>
    </View>
  );
};
