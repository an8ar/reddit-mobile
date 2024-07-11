import React from 'react';
import { Drawer } from 'react-native-drawer-layout';
import { LeftDrawerScreen } from './left-drawer';

interface Props {
  children: React.ReactNode;
}

export function RightDrawerScreen({ children }: Props) {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setRightDrawerOpen((prev) => !prev);
  };
  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => <>{children}</>}
    >
      <LeftDrawerScreen toggleRightDrawer={toggleDrawer} />
    </Drawer>
  );
}
