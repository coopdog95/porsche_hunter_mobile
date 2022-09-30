import Constants from 'expo-constants'
import * as Device from 'expo-device'
import { API_BASE_URL } from '@env'
const {
  manifest: { packagerOpts, debuggerHost },
} = Constants

const getApi = () => {
  // can't use localhost when running the app externally
  // (i.e. your phone's Expo app) so we get the network's IP address
  const isDevDevice =
    typeof packagerOpts === `object` && packagerOpts.dev && Device.isDevice

  if (isDevDevice) {
    const localIpAddress = debuggerHost.split(`:`).shift().concat(`:3000`)
    return 'http://'.concat(localIpAddress)
  }

  return API_BASE_URL
}

export default getApi()
