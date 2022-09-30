export const unwrapApiErrorMessages = body => {
  if (!body.error) {
    return ''
  } else if (typeof body.error === 'string') {
    return body.error
  } else if (Array.isArray(body.error)) {
    return body.error.join('. ')
  } else {
    return Object.keys(body.error)
      .map(k => {
        const upperCasedKey = k[0].toUpperCase() + k.slice(1)

        return body.error[k]
          .map(reason => `${upperCasedKey} ${reason}`)
          .join('. ')
      })
      .join('. ')
  }
}

/**
 * @param body, {Object} JSON-parsed body of API response
 * @param response, {Response} meta-data of API response
 *   see https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
export const createApiError = (
  body,
  { status, statusText, headers, ok, type },
) => {
  const message = unwrapApiErrorMessages(body)

  return {
    status,
    statusText,
    ok,
    type,
    headers,
    body,
    message,
  }
}

export default response =>
  response.json().then(body => {
    const apiError = createApiError(body, response)
    return Promise.reject(apiError)
  })
