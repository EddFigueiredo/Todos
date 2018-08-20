import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Input } from 'core/components/Input'
import { DisplayError } from 'core/components/DisplayError'
import { Navbar } from 'core/components/Navbar'
import { InsideWrapper, Content } from 'core/components/ContentGridWrapper'
import * as TodoActions from 'state/todo/todo-action'
import * as Blueprint from 'core/components/Auth'

class NewTodo extends Component {
  componentWillMount() {
    this.setState({})
    this.setValueToState = this.setValueToState.bind(this)
  }

  setValueToState(event) {
    const { name } = event.target
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { createTodo } = this.props
    return (
      <section>
        <Navbar />
        <InsideWrapper>
          <Content>
            <h1><FormattedMessage id="todo.new" /></h1>
            <Blueprint.AuthForm>
              <Input label="Todo title" type="text" name="title" value={this.state.title || ''} onChange={this.setValueToState} />
              <DisplayError>{this.error}</DisplayError>
              <Blueprint.AuthButton type="accent" onClick={() => createTodo({ title: this.state.title })}>
                <FormattedMessage id="todo.new.submit" />
              </Blueprint.AuthButton>
            </Blueprint.AuthForm>
          </Content>
        </InsideWrapper>
      </section>
    )
  }
}

NewTodo.propTypes = {
  createTodo: PropTypes.func
}

const mapProps = () => ({})

const mapActions = {
  createTodo: TodoActions.asyncCreateTodo
}

export default connect(mapProps, mapActions)(NewTodo)
