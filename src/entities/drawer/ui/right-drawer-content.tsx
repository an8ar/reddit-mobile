import React from 'react';

import { UserDrawerContent } from '~/entities/user';

import { UserDrawerLayout } from '../../drawer/ui/right-drawer-layout';

interface Props {
  handleClose: () => void;
}

export const RightDrawerContent = ({ handleClose }: Props) => {
  return (
    <UserDrawerLayout handleClose={handleClose}>
      <UserDrawerContent handleClose={handleClose} />
    </UserDrawerLayout>
  );
};
