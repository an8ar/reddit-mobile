import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Drawer as DrawerLayout } from 'react-native-drawer-layout';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RightDrawerScreen />
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('communities')} />
      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('chat')} />
    </DrawerContentScrollView>
  );
}

interface LeftDrawerProps {
  toggleRightDrawer: () => void;
}

const LeftDrawerScreen = ({ toggleRightDrawer }: LeftDrawerProps) => {
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        drawerIcon: ({ size, focused }) => {
          return <Ionicons name="menu-sharp" size={24} color="black" />;
        },
        headerShown: true,
        headerTitle: 'togle',
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
          return <Ionicons name="menu-sharp" size={24} color="black" onPress={toggleRightDrawer} />;
        },
        headerRightContainerStyle: { paddingRight: 12 },
        headerLeftContainerStyle: { paddingLeft: 12 },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
};

function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setRightDrawerOpen((prev) => !prev);
  };
  return (
    <DrawerLayout
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="right"
      renderDrawerContent={() => (
        <>
          <View>
            <Text>wwws</Text>
          </View>
        </>
      )}
    >
      <LeftDrawerScreen toggleRightDrawer={toggleDrawer} />
    </DrawerLayout>
  );
}
