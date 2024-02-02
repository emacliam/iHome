import '../tamagui.css'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { Button, SizableText, TamaguiProvider, Text, View, YStack } from 'tamagui'
import { Ionicons } from '@expo/vector-icons';
import { config } from '../tamagui.config'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Settings } from '@tamagui/lucide-icons'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  const goBack = () => {
    router.back()
  }

  return (

    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <Stack initialRouteName='(tabs)' screenOptions={{
          headerBackTitleVisible: false, headerBackVisible: false, headerLeft: () => <Pressable onPressIn={goBack}>
            <Ionicons name={"arrow-back"} size={24} color='white' />
          </Pressable>
        }}>

          <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "home" }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="electricity" options={{ title: "Energy Usage" }} />
          <Stack.Screen name="smart-lamp" options={{
            headerTitle: () => {
              return (
                <YStack alignItems='center'>
                  <Text alignSelf="flex-start" fontSize={18} color={"$gray12"} fontWeight={"500"}>Smart Lamp</Text>
                  <SizableText color={"gray"}>Living Room</SizableText>
                </YStack>
              )
            },

            headerRight: () => {
              return (
                <Button unstyled icon={Settings} scaleIcon={2}>

                </Button>
              )
            }
          }} />
          <Stack.Screen name="air-conditioner" options={{
            headerTitle: () => {
              return (
                <YStack alignItems='center'>
                  <Text alignSelf="flex-start" fontSize={18} color={"$gray12"} fontWeight={"500"}>Air Conditioner</Text>
                  <SizableText color={"gray"}>Living Room</SizableText>
                </YStack>
              )
            },

            headerRight: () => {
              return (
                <Button unstyled icon={Settings} scaleIcon={2}>

                </Button>
              )
            }
          }} />

        </Stack>
      </ThemeProvider>
    </TamaguiProvider>


  )
}
