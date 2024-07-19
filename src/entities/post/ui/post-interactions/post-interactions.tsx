import React from 'react';

import { View } from 'react-native';

import { PostMessage } from './post-message';
import { PostVote } from './post-vote';

export const PostInteractions = () => {
  return (
    <View className="flex-row">
      <PostVote />
      <PostMessage />
    </View>
  );
};
