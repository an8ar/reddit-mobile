import React from 'react';

import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoginWidget } from '~/widgets/auth';

const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <ScrollView>
        <LoginWidget />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
