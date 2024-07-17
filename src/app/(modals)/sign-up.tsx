import React from 'react';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CreateEmailWidget } from '~/widgets/auth';

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
          <CreateEmailWidget />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
