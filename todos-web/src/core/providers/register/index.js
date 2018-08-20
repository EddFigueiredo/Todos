import Api from '../api'

export function signUp(payload) {
  return Api.request('/auth/signup', { data: payload, method: 'POST' })
}

export function signIn(payload) {
  return Api.request('/auth/login', { data: payload, method: 'POST' })
}

