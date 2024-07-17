import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import { FormProvider, RHFTextField } from '~/shared/hook-form';

type FormValuesProps = {
  email: string;
  password: string;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

export function LoginForm() {
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
      setError('email', { message: 'Email is not valid', type: 'custom' });
      setError('password', { message: 'Wrong credentials', type: 'custom' });
    }
  };

  return (
    <View className="mt-10">
      <FormProvider methods={methods}>
        <View style={styles.inputContainer}>
          <RHFTextField name="email" label="Email" />
          <RHFTextField name="password" label="Password" />
        </View>

        <View className="items-center">
          <TouchableOpacity
            className="w-[90%] rounded-full bg-orange-700"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="py-2 text-center text-xl font-semibold text-white">Confirm</Text>
          </TouchableOpacity>
        </View>
      </FormProvider>
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
