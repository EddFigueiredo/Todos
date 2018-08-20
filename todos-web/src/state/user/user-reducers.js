
export default (state = {}, { user, error, type }) => ({
  LOGIN_SUCCESS: {
    ...state,
    ...user
  },
  LOGIN_ERROR: {
    ...state,
    error
  },
  LOGOUT_SUCCESS: {}
}[type] || state)
