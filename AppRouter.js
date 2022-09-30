import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

import Account from './components/Account'
import Home from './components/Home'
import Login from './components/Login'
import Hunts from './components/Hunts'

enableScreens()
const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRouter({ authenticated, setAuthenticated }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator>
          {!authenticated ? (
            <Screen name="Login" options={{ headerShown: false }}>
              {props => (
                <Login
                  {...props}
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              )}
            </Screen>
          ) : (
            <>
              <Screen name="Home" component={Home} />
              <Screen name="Hunts" component={Hunts} />
              <Screen name="Account" component={Account} />
            </>
          )}
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}