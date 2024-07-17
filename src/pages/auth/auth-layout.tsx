import React from 'react';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
