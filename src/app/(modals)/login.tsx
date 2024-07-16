import React from 'react';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LoginWidget } from '~/widgets/auth';

const Login = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
          <LoginWidget />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
