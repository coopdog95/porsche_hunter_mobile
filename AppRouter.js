import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'
import { getAllHunts } from './requests/hunts'

import Account from './components/Account'
import Home from './components/Home'
import Login from './components/Login'
import Hunts from './components/Hunts'
import { Button } from 'react-native'

enableScreens()
const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRouter({
  authenticated,
  setAuthenticated,
  userId,
  setUserId,
}) {
  const [hunts, setHunts] = useState(null)
  const [loadingHunts, setLoadingHunts] = useState(false)

  const fetchHunts = async () => {
    setLoadingHunts(true)
    const fetchedHunts = await getAllHunts()
    setHunts(fetchedHunts)
    setLoadingHunts(false)
  }

  const logout = () => {
    setAuthenticated(false)
    setUserId(null)
  }

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
                  setUserId={setUserId}
                />
              )}
            </Screen>
          ) : (
            <>
              <Screen
                name="Home"
                options={{
                  headerRight: _props => (
                    <Button title="Logout" onPress={logout} color="red" />
                  ),
                }}
              >
                {props => (
                  <Home
                    {...props}
                    userId={userId}
                    hunts={hunts}
                    setHunts={setHunts}
                    fetchHunts={fetchHunts}
                    loadingHunts={loadingHunts}
                  />
                )}
              </Screen>
              <Screen name="Hunts" options={{ title: 'Hunt' }}>
                {props => (
                  <Hunts {...props} userId={userId} fetchHunts={fetchHunts} />
                )}
              </Screen>
              <Screen name="Account" component={Account} />
            </>
          )}
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
