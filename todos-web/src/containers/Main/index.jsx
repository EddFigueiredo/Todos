import React, { PureComponent } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Logo } from 'core/components/Logo'
import { UserNav, UserTypes } from 'core/components/UserNav'
import * as UserActions from 'state/user/user-action'
import * as Blueprint from './Blueprint'

export class Main extends PureComponent {
  render() {
    const { onLogout, children, user } = this.props
    return (
      <Blueprint.Grid>
        <Blueprint.Header>
          <Link to="/"><Logo /></Link>
          <UserNav user={user} logout={() => onLogout()} />
        </Blueprint.Header>
        <div>{children}</div>
      </Blueprint.Grid>
    )
  }
}

Main.propTypes = {
  children: PropTypes.node,
  user: PropTypes.shape(UserTypes),
  onLogout: PropTypes.func
}

const mapProps = state => ({
  user: state.user
})

const mapActions = {
  onLogout: UserActions.asyncLogout
}

export default connect(mapProps, mapActions)(Main)
