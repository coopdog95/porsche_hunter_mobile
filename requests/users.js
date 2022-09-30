import fetchApi from '../services/fetchApi'
import tokenStorage from '../services/tokenStorage'

export const postUserLogin = async (username, password) => {
  const body = JSON.stringify({ username, password })
  const response = await fetchApi('/users/login', 'POST', { body })
  await tokenStorage.set(response.token)
  return response
}

export const createNewUser = async (username, password) => {
  const body = JSON.stringify({ username, password })
  const response = await fetchApi('/users', 'POST', { body })
  await tokenStorage.set(response.token)
  return response
}

export const emailValidator = email =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)
