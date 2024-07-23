import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';

import { LeftDrawerContent } from '~/entities/drawer';

interface LeftDrawerProps {
  toggleRightDrawer: () => void;
}

export const LeftDrawerScreen = ({ toggleRightDrawer }: LeftDrawerProps) => {
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        drawerIcon: ({ size, focused }) => {
          return <Ionicons name="menu-sharp" size={24} color="black" />;
        },
        headerShown: true,
        headerTitle: 'toggle',
        drawerStyle: { width: '80%' },
        drawerPosition: 'left',
        headerLeft(props) {
          return (
            <Ionicons
              name="menu-sharp"
              size={24}
              color="black"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          );
        },
        headerRight(props) {
          return <FontAwesome name="reddit" size={24} color="black" onPress={toggleRightDrawer} />;
        },
        headerRightContainerStyle: { paddingRight: 12 },
        headerLeftContainerStyle: { paddingLeft: 12 },
      }}
      drawerContent={(props) => <LeftDrawerContent {...props} />}
    />
  );
};
