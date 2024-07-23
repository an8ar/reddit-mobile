import { Drawer } from 'expo-router/drawer';

import { LeftDrawerContent } from '~/entities/drawer';

import { DrawerHeader } from './drawer-header';

interface LeftDrawerProps {
  toggleRightDrawer: () => void;
}

export const LeftDrawerScreen = ({ toggleRightDrawer }: LeftDrawerProps) => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        header: () => <DrawerHeader toggleRightDrawer={toggleRightDrawer} />,
        drawerStyle: { width: '80%' },
        drawerPosition: 'left',
      }}
      drawerContent={(props) => <LeftDrawerContent {...props} />}
    />
  );
};
