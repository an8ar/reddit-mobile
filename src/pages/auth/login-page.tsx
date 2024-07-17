import React from 'react';

import { LoginWidget } from '~/widgets/auth';

import { AuthLayout } from './auth-layout';

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginWidget />
    </AuthLayout>
  );
};
