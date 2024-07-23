import React from 'react';

import { Drawer } from 'react-native-drawer-layout';

import { UserDrawerContent } from '~/entities/user';

import { LeftDrawerScreen } from './left-drawer';

export function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setRightDrawerOpen((prev) => !prev);
  };

  const handleClose = () => {
    setRightDrawerOpen(false);
  };

  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => <UserDrawerContent handleClose={handleClose} />}
      drawerStyle={{ width: '80%' }}
    >
      <LeftDrawerScreen toggleRightDrawer={toggleDrawer} />
    </Drawer>
  );
}
