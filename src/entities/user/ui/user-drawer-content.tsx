import React from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

import { UserDrawerLayout } from './user-drawer-layout';

interface Props {
  handleClose: () => void;
}

export const UserDrawerContent = ({ handleClose }: Props) => {
  const router = useRouter();

  const handleAuth = () => {
    handleClose();
    router.push('(modals)/login');
  };

  return (
    <UserDrawerLayout handleClose={handleClose}>
      <View className="items-center">
        <FontAwesome5 name="user-circle" size={20 * 4} color="#9ca3af" />
      </View>
      <View className="my-5 border-b border-gray-200 pb-2">
        <Text className="text-center text-lg font-light">
          Sign up to upvote the best content, customize you feed, share your interests, and more!
        </Text>
      </View>
      <DrawerItem
        label="Sign-up / Login"
        onPress={handleAuth}
        icon={() => <FontAwesome5 name="user-circle" size={24} color="#1c1917" />}
      />
    </UserDrawerLayout>
  );
};
