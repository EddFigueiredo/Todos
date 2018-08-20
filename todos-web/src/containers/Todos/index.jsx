import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { Input } from 'core/components/Input'
import { InsideWrapper, Content } from 'core/components/ContentGridWrapper'
import { TodoList } from 'core/components/TodoList'
import orderBy from 'lodash/orderBy'
import * as TodoActions from 'state/todo/todo-action'
import * as Blueprint from './Blueprint'

class Todos extends Component {
  componentWillMount() {
    const { getTodos } = this.props
    this.setState({})
    this.setValueToState = this.setValueToState.bind(this)
    this.markAsChecked = this.markAsChecked.bind(this)
    getTodos()
  }

  setValueToState(event) {
    const { name } = event.target
    this.setState({ [name]: event.target.value })
  }

  get todoList() {
    return this.props.todos
  }

  markAsChecked(idx) {
    const { updateTodo } = this.props
    const { checked, id } = this.todoList[idx]
    const payload = { checked: !checked }
    updateTodo(id, payload)
  }

  render() {
    const { deleteTodo, createTodo } = this.props
    return (
      <InsideWrapper>
        <Content>
          <Blueprint.Wrapper>
            <h2><FormattedMessage id="todo.title" onClick="" /></h2>
            <Blueprint.Container>
              <Input
                type="text"
                name="title"
                value={this.state.title || ''}
                onChange={this.setValueToState}
                background="white"
              />
            </Blueprint.Container>
            <Blueprint.CreateNewTodo type="accent" onClick={() => createTodo({ title: this.state.title })}>
              <FormattedMessage id="todo.new" />
            </Blueprint.CreateNewTodo>
          </Blueprint.Wrapper>
          <TodoList
            items={this.todoList}
            delete={deleteTodo}
            markChecked={this.markAsChecked}
          />
        </Content>
      </InsideWrapper>
    )
  }
}

Todos.propTypes = {
  getTodos: PropTypes.func,
  deleteTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  createTodo: PropTypes.func,
  todos: PropTypes.array
}

Todos.defaultProps = {
  todos: []
}

const mapProps = state => ({
  todos: orderBy(state.todo.items, ['id'], ['desc'])
})

const mapActions = {
  getTodos: TodoActions.asyncGetTodos,
  deleteTodo: TodoActions.asyncDeleteTodo,
  updateTodo: TodoActions.asyncUpdateTodo,
  createTodo: TodoActions.asyncCreateTodo
}

export default connect(mapProps, mapActions)(Todos)
