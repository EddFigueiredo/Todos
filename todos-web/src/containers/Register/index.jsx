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

  get payload() {
    const { name, email, password, passwordConfirmation } = this.state
    return { name, email, password, passwordConfirmation }
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
          <h1><FormattedMessage id="register" /></h1>
          <Blueprint.AuthForm>
            <Input label="Name" type="email" name="name" value={this.state.name || ''} onChange={this.setValueToState} />
            <Input label="Email" type="email" name="email" value={this.state.email || ''} onChange={this.setValueToState} />
            <Input label="Password" type="password" name="password" value={this.state.password || ''} onChange={this.setValueToState} />
            <Input label="Confirm" type="password" name="passwordConfirmation" value={this.state.passwordConfirmation || ''} onChange={this.setValueToState} />
            <DisplayError>{this.error}</DisplayError>
            <Blueprint.AuthButton type="accent" onClick={() => onSubmit(this.payload)}>
              <FormattedMessage id="register" />
            </Blueprint.AuthButton>
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
  onSubmit: UserActions.asyncSignUp
}

export default connect(mapProps, mapActions)(Login)
