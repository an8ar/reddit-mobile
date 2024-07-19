import React from 'react';

import Feather from '@expo/vector-icons/Feather';
import { Text, View } from 'react-native';

export const PostMessage = () => {
  return (
    <View className="ml-2 flex-row items-center space-x-2 rounded-full border-[0.5px] border-gray-300 px-3 py-[2px]">
      <Feather name="message-circle" size={16} color="black" />
      <Text>10</Text>
    </View>
  );
};
