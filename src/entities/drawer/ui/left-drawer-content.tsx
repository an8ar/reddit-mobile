import React from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { CommunitiesAccordion } from '~/entities/community';

export function LeftDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <CommunitiesAccordion />

      <DrawerItem label="Home" onPress={() => props.navigation.navigate('communities')} />

      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('chat')} />
    </DrawerContentScrollView>
  );
}
