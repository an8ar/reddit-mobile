import React from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export const PostCard = () => {
  const onPress = () => {
    console.log('options pressed');
  };

  return (
    <View className="mb-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View className="h-5 w-5 rounded-full bg-black" />
          <Text>an8ar</Text>
          <Text className="text-xs text-gray-600">9h</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View>
            <Entypo name="dots-three-horizontal" size={16} color="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <Text className="text-lg font-semibold">Frontend Reddit</Text>
        <Text className="text-xs font-light text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit dolorem perspiciatis
          asperiores cupiditate veritatis. Excepturi voluptate totam beatae vel eligendi officiis
          soluta sint, aut eos, ab dolorum maiores debitis qui.
        </Text>
      </View>
    </View>
  );
};
