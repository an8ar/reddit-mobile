import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import { FormProvider, RHFTextField } from '~/shared/hook-form';

type FormValuesProps = {
  verificationCode: string;
};

const VerifyEmailSchema = Yup.object().shape({
  verificationCode: Yup.string().required('Email is required').min(6),
});

const defaultValues = {
  verificationCode: '',
};

export function VerifyEmailForm() {
  const router = useRouter();

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(VerifyEmailSchema),
    defaultValues,
  });

  const { setError, handleSubmit } = methods;

  const handleContinue = () => {
    router.push('(modals)/(sign-up)/verify-email');
  };

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      handleContinue();
    } catch (error: unknown) {
      console.log(error);
      setError('verificationCode', { message: 'Email is not valid', type: 'custom' });
    }
  };

  return (
    <View className="mt-10">
      <FormProvider methods={methods}>
        <View style={styles.inputContainer}>
          <RHFTextField name="verificationCode" label="Verification Code" />
        </View>
      </FormProvider>
      <View className="mb-10 items-center" style={{ gap: 20 }}>
        <TouchableOpacity
          className="w-[90%] rounded-full bg-orange-700"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="py-2 text-center text-xl font-semibold text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  inputContainer: {
    marginBottom: 24,
  },
});
