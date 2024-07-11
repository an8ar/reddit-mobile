import React from 'react';

import { View, Text } from 'react-native';

import { UserDrawerLayout } from './user-drawer-layout';

interface Props {
  handleClose: () => void;
}

export const UserDrawerContent = ({ handleClose }: Props) => {
  return (
    <UserDrawerLayout handleClose={handleClose}>
      <View className="gap-10">
        <Text>UserDrawerContent</Text>
        <Text>UserDrawerContent</Text>

        <Text>UserDrawerContent</Text>

        <Text>UserDrawerContent</Text>
      </View>
    </UserDrawerLayout>
  );
};
