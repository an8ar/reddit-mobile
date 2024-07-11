import React from 'react';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

export const UserDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <View className="gap-10">
        <Text>UserDrawerContent</Text>
        <Text>UserDrawerContent</Text>

        <Text>UserDrawerContent</Text>

        <Text>UserDrawerContent</Text>
      </View>
    </DrawerContentScrollView>
  );
};
