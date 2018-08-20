import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'
import user from './state/user/user-reducers'
import todo from './state/todo/todo-reducers'

export default combineReducers({
  routing,
  form,
  user,
  todo
})
