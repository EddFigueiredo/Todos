import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { HeadLink } from 'core/components/HeadLink'
import { screen } from 'core/utils/theme'
import { FormattedMessage } from 'react-intl'

const Wrapper = styled.div`
  padding: 0 1.25rem 0 0;
  text-align: right;
  ${screen.desktop`padding: 0;`}
`

const UserLink = styled(HeadLink)`
  position: relative;
`

export class UserNav extends Component {
  renderLogin() {
    return (
      <UserLink to="/login">
        <span><FormattedMessage id="signin" /></span>
      </UserLink>
    )
  }

  renderLogout() {
    const { user } = this.props
    return (
      <UserLink onClick={() => this.props.logout()}>
        <span><FormattedMessage id="greetings" /></span>
        <span>{user.name}</span>
      </UserLink>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.props.user.name ? this.renderLogout() : this.renderLogin()}
      </Wrapper>
    )
  }
}

export const UserTypes = {
  name: PropTypes.string,
  email: PropTypes.string
}

UserNav.propTypes = {
  user: PropTypes.shape(UserTypes),
  logout: PropTypes.func
}
