import tokenStorage from '../tokenStorage'

const DESTRUCTIVE_HTTP_VERBS = new Set(['POST', 'PUT', 'PATCH', 'DELETE'])

export const generateDefaultHeaders = async () => {
  const token = await tokenStorage.get()
  const headers = new Headers()
  headers.append('Authorization', token)
  headers.append('Content-Type', 'application/json')
  return headers
}

/**
 * @param httpVerb, {String} upper case string of chosen HTTP method
 * @param body, {String} serialzed body for a destructive request. Pass empty
 *   string for safe HTTP methods.
 * @param headers, {Object}, can be a Headers object
 */
export const buildConfig = (httpVerb, body, headers, abortSignal) => {
  const config = {
    method: httpVerb,
    headers,
  }

  if (abortSignal) config.signal = abortSignal
  if (DESTRUCTIVE_HTTP_VERBS.has(httpVerb)) config.body = body

  return config
}

export default async (verb, body) => {
  const headers = await generateDefaultHeaders()
  return buildConfig(verb, body, headers)
}
