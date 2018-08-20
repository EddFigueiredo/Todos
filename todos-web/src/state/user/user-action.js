import * as Register from 'core/providers/register'
import { push } from 'react-router-redux'

export const logout = () => ({
  type: 'LOGOUT'
})

export const signUp = (uid, password, passwordConfirmation) => ({
  type: 'SIGN_UP',
  uid,
  password,
  passwordConfirmation
})

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

export const login = (uid, password) => ({
  type: 'LOGIN',
  uid,
  password
})

export const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  user
})

export const loginError = error => ({
  type: 'LOGIN_ERROR',
  error
})

export const asyncLogin = (email, password) => async (dispatch) => {
  dispatch(login(email, password))
  await Register.signIn({ email, password })
    .then((res) => {
      dispatch(loginSuccess(res.data.user))
      dispatch(push('/todos'))
    })
    .catch((err) => {
      dispatch(loginError(err.data.message))
    })
}

export const asyncSignUp = payload => async (dispatch) => {
  const { name, email, password, passwordConfirmation } = payload
  dispatch(signUp(name, email, password, passwordConfirmation))
  await Register.signUp(payload)
    .then((res) => {
      dispatch(loginSuccess(res.data.user))
      dispatch(push('/todos'))
    })
    .catch((err) => {
      dispatch(loginError(err.data.message))
    })
}

export const asyncLogout = () => async (dispatch) => {
  dispatch(logout())
  window.sessionStorage.removeItem('Authorization')
  dispatch(logoutSuccess())
  dispatch(push('/login'))
}

