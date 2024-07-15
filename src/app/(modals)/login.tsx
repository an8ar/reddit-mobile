import React from 'react';

import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthHeader } from '~/entities/auth';

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <AuthHeader />
    </SafeAreaView>
  );
};

export default Login;
