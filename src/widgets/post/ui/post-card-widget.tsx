import React from 'react';

import { View } from 'react-native';

import { PostCard, PostInteractions } from '~/entities/post';

export const PostCardWidget = () => {
  return (
    <View className="mb-2 border-b-[0.5px] border-gray-300 px-2 pb-2">
      <PostCard />
      <PostInteractions />
    </View>
  );
};
