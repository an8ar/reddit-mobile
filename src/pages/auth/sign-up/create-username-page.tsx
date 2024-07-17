import React from 'react';

import { CreateUsernameWidget } from '~/widgets/auth';

import { AuthLayout } from '../auth-layout';

export const CreateUsernamePage = () => {
  return (
    <AuthLayout>
      <CreateUsernameWidget />
    </AuthLayout>
  );
};
