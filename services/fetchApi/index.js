import tokenStorage from '../tokenStorage'
import configureRequest from './configureRequest'
import wrapError from './wrapError'
import api from './apiHelper'
import { Native as Sentry } from 'sentry-expo'

const fetchApi = async (
  route,
  verb,
  { body = '', isUrlVerbatim = false } = {},
) => {
  const url = isUrlVerbatim ? route : `${api}/api/v1${route}`
  try {
    const config = await configureRequest(verb, body)
    const response = await fetch(url, config)

    if (response.status === 401) {
      await tokenStorage.clear()
    }
    if (!response.ok) {
      return wrapError(response)
    }
    return response.status === 204 ? {} : response.json()
  } catch (error) {
    Sentry.captureException(error)
    return Promise.reject(error)
  }
}

export default fetchApi
