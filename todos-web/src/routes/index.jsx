import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'core/constants/default.theme'
import { IntlProviderWrapper } from 'core/components/IntlProviderWrapper'
import { injectGlobalStyle } from 'core/assets/style/global'

import Main from 'containers/Main'
import Login from 'containers/Login'
import Register from 'containers/Register'
import Todos from 'containers/Todos'
import Landing from 'containers/Landing'
import NewTodo from 'containers/Todos/NewTodo'

import { store } from '../store'

const history = syncHistoryWithStore(browserHistory, store)

const Routes = () => {
  injectGlobalStyle(Theme)

  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <IntlProviderWrapper>
          <Router history={history}>
            <Route path="/" component={Main}>
              <IndexRoute component={Landing} />
              <Route path="/todos" component={Todos} />
              <Route path="/new-todo" component={NewTodo} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Route>
          </Router>
        </IntlProviderWrapper>
      </Provider>
    </ThemeProvider>
  )
}

export default Routes
