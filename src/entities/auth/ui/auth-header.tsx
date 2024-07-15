import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export const AuthHeader = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex-row items-center justify-between p-4">
      <TouchableOpacity onPress={handleBack}>
        <AntDesign name="close" size={32} color="#94a3b8" />
      </TouchableOpacity>
      <Image
        source={require('../../../../assets/images/reddit.png')}
        className="absolute left-1/2 h-10 w-10 -translate-x-1/2"
      />
      <Text className="text-lg font-semibold text-gray-500">Sign up</Text>
    </View>
  );
};

export default AuthHeader;
