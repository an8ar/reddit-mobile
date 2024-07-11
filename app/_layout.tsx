import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
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
import { SafeAreaView } from 'react-native-safe-area-context';
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
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerIcon: ({ size, focused }) => {
            return <Ionicons name="menu-sharp" size={24} color="black" />;
          },
          headerShown: true,
          headerTitle: 'togle',
          drawerStyle: { width: '80%' },
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
            return <Ionicons name="menu-sharp" size={24} color="black" />;
          },
          headerRightContainerStyle: { paddingRight: 12 },
          headerLeftContainerStyle: { paddingLeft: 12 },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      />
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home sadfkdsjfkdsjfksdjfkdjfkdj"
        onPress={() => props.navigation.navigate('communities')}
      />
      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('chat')} />
    </DrawerContentScrollView>
  );
}
