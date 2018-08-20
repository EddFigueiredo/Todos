import * as Todos from 'core/providers/todos'

const createTodo = ({ title, createdBy }) => ({
  type: 'CREATE_TODO',
  title,
  createdBy
})

const createTodoSuccess = todo => ({
  type: 'CREATE_TODO_SUCCESS',
  todo
})

const getTodos = () => ({
  type: 'GET_TODOS'
})

const getTodosSuccess = todos => ({
  type: 'GET_TODOS_SUCCESS',
  todos
})

const updateTodo = (todoId, payload) => ({
  type: 'UPDATE_TODO',
  todoId,
  payload
})

export const asyncCreateTodo = ({ title }) => async (dispatch, getState) => {
  const createdBy = getState().user.id
  const payload = { title, createdBy }
  dispatch(createTodo(payload))
  await Todos.createTodo(payload)
    .then((res) => {
      console.log(res)
      dispatch(createTodoSuccess(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const asyncGetTodos = () => async (dispatch) => {
  dispatch(getTodos())
  await Todos.all()
    .then((res) => {
      console.log(res.data)
      dispatch(getTodosSuccess(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const asyncDeleteTodo = todoId => async (dispatch) => {
  await Todos.deleteTodo(todoId)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const asyncUpdateTodo = (todoId, payload) => async (dispatch) => {
  await Todos.updateTodo(todoId, payload)
    .then(() => {
      dispatch(updateTodo(todoId, payload))
      dispatch(asyncGetTodos())
    })
}

