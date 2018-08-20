import { applyMiddleware, createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const middleware = [
  routerMiddleware(browserHistory),
  thunk
]

export const store = composeEnhancers(applyMiddleware(...middleware))(createStore)(reducers)
