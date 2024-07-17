import React from 'react';

import { CreatePasswordWidget } from '~/widgets/auth';

import { AuthLayout } from '../auth-layout';

export const CreatePasswordPage = () => {
  return (
    <AuthLayout>
      <CreatePasswordWidget />
    </AuthLayout>
  );
};
