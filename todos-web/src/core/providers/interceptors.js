import { parsePayloadKeys, getAuthorization, getResponsetUrl } from 'core/utils/interceptor'

export function onResponseError(error) {
  // validation
  return Promise.reject(error.response)
}

export function onRequestSuccess(config) {
  // validation
  const { url } = config
  const isProtectedResource = url.search('auth') === -1
  config.data = parsePayloadKeys(config)
  if (isProtectedResource) {
    config.headers.Authorization = getAuthorization()
  }
  return config
}

export function onResponseSuccess(config) {
  const url = getResponsetUrl(config)
  const isAuthenticationResponse = url.search('auth') !== -1
  if (isAuthenticationResponse) {
    window.sessionStorage.setItem('Authorization', config.data.auth_token)
  }
  return config
}
