import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity, Image } from 'react-native';

export const GoBackHeader = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex-row items-center justify-center">
      <View className="absolute left-0 top-0 h-full -translate-x-1/2 items-center">
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="left" size={32} color="#94a3b8" />
        </TouchableOpacity>
      </View>
      <View className="h-10 w-10">
        <Image source={require('../../../../assets/images/reddit.png')} className="h-10 w-10" />
      </View>
    </View>
  );
};
