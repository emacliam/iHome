import { Ionicons, Entypo } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'
import { Text, View } from 'tamagui'
import { TabBarAdvancedButton } from '../../components/Navigation/TabBarButton'


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600'
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />


      <Tabs.Screen
        name='two'
        options={{
          title: 'Scenes',
          tabBarIcon: ({ color }) => <Ionicons name="reader" size={24} color={color} />,
          headerRight: () => {
            return (
              <View mx={10}>
                <Ionicons name="add" size={30} color={"#1ca655"} />
              </View>
            )
          }
        }}
      />


      <Tabs.Screen
        name='three'
        options={{
          title: 'Notifications',
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} />,
          headerRight: () => {
            return (
              <View mx={10}>
                <Entypo name="dots-three-vertical" size={20} color={"white"} />
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name='four'
        options={{
          title: 'Profile',
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name='five'
        options={{
          title: 'FloatingButton',
          tabBarIcon: ({ color }) => <Ionicons name="reader" size={24} color={color} />,
          tabBarButton: (props) => (
            <TabBarAdvancedButton bgColor={"white"}  {...props} />
          ),

        }}
      />
    </Tabs>
  )
}
