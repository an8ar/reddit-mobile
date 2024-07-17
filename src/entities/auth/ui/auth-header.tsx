import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, TouchableOpacity, Image, Text } from 'react-native';

interface Props {
  isLogin: boolean;
}

export const AuthHeader = ({ isLogin }: Props) => {
  const router = useRouter();

  const handleModalClose = () => {
    router.navigate('');
  };

  const handleLogin = () => {
    router.push('(modals)/login');
  };

  const handleSignUp = () => {
    router.push('(modals)/(sign-up)/create-email');
  };
  return (
    <View className="relative flex-row items-center justify-center">
      <View className="absolute left-0">
        <TouchableOpacity onPress={handleModalClose}>
          <AntDesign name="close" size={32} color="#94a3b8" />
        </TouchableOpacity>
      </View>
      <View className="relative h-10 w-10">
        <Image source={require('../../../../assets/images/reddit.png')} className="h-10 w-10" />
      </View>
      <View className="absolute right-0">
        {isLogin && (
          <TouchableOpacity onPress={handleSignUp}>
            <Text className="text-lg font-semibold text-gray-500">Sign up</Text>
          </TouchableOpacity>
        )}
        {!isLogin && (
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-lg font-semibold text-gray-500">Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
