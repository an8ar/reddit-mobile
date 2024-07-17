import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import { FormProvider, RHFTextField } from '~/shared/hook-form';

type FormValuesProps = {
  password: string;
};

const CreatePasswordSchema = Yup.object().shape({
  password: Yup.string().required('Password is required').min(6),
});

const defaultValues = {
  password: '',
};

export function CreatePasswordForm() {
  const router = useRouter();

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CreatePasswordSchema),
    defaultValues,
  });

  const { setError, handleSubmit } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
      setError('password', { message: 'Email is not valid', type: 'custom' });
    }
  };

  return (
    <View className="mt-10">
      <FormProvider methods={methods}>
        <View style={styles.inputContainer}>
          <RHFTextField name="password" label="Password" />
        </View>
      </FormProvider>
      <View className="mb-10 items-center" style={{ gap: 20 }}>
        <TouchableOpacity
          className="w-[90%] rounded-full bg-orange-700"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="py-2 text-center text-xl font-semibold text-white">Submit</Text>
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
