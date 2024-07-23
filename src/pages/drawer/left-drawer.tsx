import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';

import { CommunitiesAccordion } from '~/entities/community';

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
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
};
function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <CommunitiesAccordion />

      <DrawerItem label="Home" onPress={() => props.navigation.navigate('communities')} />

      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('chat')} />
    </DrawerContentScrollView>
  );
}
