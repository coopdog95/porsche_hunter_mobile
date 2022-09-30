import * as SecureStore from 'expo-secure-store'

const createStorageManager = KEY => ({
  get: async () => await SecureStore.getItemAsync(KEY),
  set: async token => await SecureStore.setItemAsync(KEY, token),
  clear: async () => await SecureStore.deleteItemAsync(KEY),
})

export default createStorageManager('porsche_auth_token')
