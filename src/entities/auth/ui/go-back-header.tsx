import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export const GoBackHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View className="relative mx-2 flex-row items-center justify-center">
      <View className="absolute left-0">
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="arrowleft" size={32} />
        </TouchableOpacity>
      </View>
      <View className="h-10 w-10">
        <Image
          source={require('../../../../assets/images/reddit.png')}
          className="h-10 w-10 -translate-x-1/2"
        />
      </View>
      <View className="absolute right-0">
        <TouchableOpacity>
          <Text className="text-lg text-gray-700">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
