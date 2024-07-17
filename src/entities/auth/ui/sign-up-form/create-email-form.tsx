import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';

import { FormProvider, RHFTextField } from '~/shared/hook-form';

import { TermsAndConditions } from '../terms-and-conditions';

type FormValuesProps = {
  email: string;
};

const CreateEmailSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
});

const defaultValues = {
  email: '',
};

export function CreateEmailForm() {
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(CreateEmailSchema),
    defaultValues,
  });

  const { setError, handleSubmit } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
      setError('email', { message: 'Email is not valid', type: 'custom' });
    }
  };

  return (
    <View className="mt-10">
      <FormProvider methods={methods}>
        <View style={styles.inputContainer}>
          <RHFTextField name="email" label="Email" />
        </View>
      </FormProvider>
      <View className="mb-10 items-center" style={{ gap: 20 }}>
        <TermsAndConditions />

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
