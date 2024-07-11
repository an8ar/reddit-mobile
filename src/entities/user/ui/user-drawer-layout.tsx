import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
  handleClose: () => void;
}

export const UserDrawerLayout = ({ children, handleClose }: Props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="mb-4 flex flex-row justify-end px-2">
        <TouchableOpacity onPress={handleClose}>
          <AntDesign name="close" size={32} color="#94a3b8" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 px-4">
        <View className="flex-1">{children}</View>
        <SafeAreaView>
          <View className="flex-row items-center justify-between py-4">
            <TouchableOpacity className="flex-row items-center gap-2">
              <Feather name="settings" size={28} color="#94a3b8" />
              <Text className="text-gray-500">Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Octicons name="moon" size={28} color="#94a3b8" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </DrawerContentScrollView>
  );
};
