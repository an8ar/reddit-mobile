import React from 'react';

import { VerifyEmailWidget } from '~/widgets/auth';

import { AuthLayout } from '../auth-layout';

export const VerifyEmailPage = () => {
  return (
    <AuthLayout>
      <VerifyEmailWidget />
    </AuthLayout>
  );
};
