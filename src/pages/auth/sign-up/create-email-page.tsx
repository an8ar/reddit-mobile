import React from 'react';

import { CreateEmailWidget } from '~/widgets/auth';

import { AuthLayout } from '../auth-layout';

export const CreateEmailPage = () => {
  return (
    <AuthLayout>
      <CreateEmailWidget />
    </AuthLayout>
  );
};
