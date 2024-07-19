import React from 'react';

import { ScrollView } from 'react-native';

import { PostCardWidget } from '~/widgets/post';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="">
      <PostCardWidget />
      <PostCardWidget />

      <PostCardWidget />

      <PostCardWidget />

      <PostCardWidget />
      <PostCardWidget />

      <PostCardWidget />
    </ScrollView>
  );
};

export default Home;
