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
    <View className="flex-row items-center justify-between">
      <View>
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="close" size={32} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <View className="relative h-10 w-10">
        <Image
          source={require('../../../../assets/images/reddit.png')}
          className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2"
        />
      </View>

      <View>
        <Text className="text-lg font-semibold text-gray-500">Sign up</Text>
      </View>
    </View>
  );
};

export default AuthHeader;
