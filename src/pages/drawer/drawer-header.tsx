import React from 'react';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  toggleRightDrawer: () => void;
}

export const DrawerHeader = ({ toggleRightDrawer }: Props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top + 4,
        backgroundColor: 'white',
      }}
    >
      <View className="flex-row items-center p-2">
        <Text>
          <Ionicons
            name="menu-sharp"
            size={24}
            color="black"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </Text>

        <Text className="flex-1 text-center">DrawerHeader</Text>
        <Text>
          <FontAwesome name="reddit" size={24} color="black" onPress={toggleRightDrawer} />
        </Text>
      </View>
    </View>
  );
};
