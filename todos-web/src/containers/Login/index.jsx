import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Input } from 'core/components/Input'
import { FormattedMessage } from 'react-intl'
import { DisplayError } from 'core/components/DisplayError'
import { InsideWrapper, Content } from 'core/components/ContentGridWrapper'
import get from 'lodash/get'
import * as UserActions from 'state/user/user-action'
import * as Blueprint from 'core/components/Auth'

class Login extends Component {
  componentWillMount() {
    this.setState({})
    this.setValueToState = this.setValueToState.bind(this)
  }

  get error() {
    const { error } = this.props
    return error
  }

  setValueToState(event) {
    const { name } = event.target
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { onSubmit } = this.props

    return (
      <InsideWrapper>
        <Content>
          <h1><FormattedMessage id="login" /></h1>
          <Blueprint.AuthForm>
            <Input label="Email" type="email" name="email" value={this.state.email || ''} onChange={this.setValueToState} />
            <Input label="Password" type="password" name="password" value={this.state.password || ''} onChange={this.setValueToState} />
            <DisplayError>{this.error}</DisplayError>
            <Blueprint.AuthButton type="accent" onClick={() => onSubmit(this.state.email, this.state.password)}>
              <FormattedMessage id="signin" />
            </Blueprint.AuthButton>
            <Blueprint.RegisterLink to="/register"><FormattedMessage id="register.text" /></Blueprint.RegisterLink>
          </Blueprint.AuthForm>
        </Content>
      </InsideWrapper>
    )
  }
}

Login.propTypes = {
  error: PropTypes.string,
  onSubmit: PropTypes.func
}

const mapProps = ({ user }) => ({
  error: get(user, 'error')
})

const mapActions = {
  onSubmit: UserActions.asyncLogin
}

export default connect(mapProps, mapActions)(Login)
