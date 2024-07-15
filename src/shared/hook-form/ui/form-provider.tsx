import React, { ReactNode } from 'react';

import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
};

export function FormProvider({ children, onSubmit, methods }: Props) {
  return <Form {...methods}>{children}</Form>;
}
