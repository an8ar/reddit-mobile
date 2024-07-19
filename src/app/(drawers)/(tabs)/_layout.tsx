import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#09090b',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          paddingTop: 4,
        },
      }}
      sceneContainerStyle={{
        paddingTop: 4,
        backgroundColor: 'white',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={32} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: 'Communities',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={32} name="people-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <FontAwesome6 size={32} name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chat" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell" size={32} color={color} />,
        }}
      />
    </Tabs>
  );
}
