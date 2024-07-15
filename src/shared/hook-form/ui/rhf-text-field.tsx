/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Input } from '@rneui/themed';
import { Controller, useFormContext } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
}

export function RHFTextField({ name, placeholder, label, defaultValue }: IProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <View style={styles.inputWrapper}>
          {label && <Text style={styles.label}>{label}</Text>}
          <Input
            placeholder={placeholder}
            onChangeText={field.onChange}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onBlur={field.onBlur}
            value={field.value}
            errorMessage={errors[name] ? (errors[name]?.message as string) : undefined}
            style={styles.input}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 10,
  },
});
