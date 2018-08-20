import Api from '../api'

export function all() {
  return Api.request('/todos', { method: 'GET' })
}

export function getTodo(todoId) {
  return Api.request(`/todos/${todoId}`, { method: 'GET' })
}

export function getTodoItems(todoId) {
  return Api.request(`/todos/${todoId}/items`, { method: 'GET' })
}

export function getTodoItem(todoId, itemId) {
  return Api.request(`/todos/${todoId}/items/${itemId}`, { method: 'GET' })
}

export function createTodo(payload) {
  return Api.request('/todos/', { data: payload, method: 'POST' })
}

export function createTodoItem(todoId, payload) {
  return Api.request(`/todos/${todoId}/items`, { data: payload, method: 'POST' })
}

export function updateTodoItemId(todoId, itemId, payload) {
  return Api.request(`/todos/${todoId}/items/${itemId}`, { data: payload, method: 'PUT' })
}

export function updateTodo(todoId, payload) {
  return Api.request(`/todos/${todoId}`, { data: payload, method: 'PUT' })
}

export function deleteTodo(todoId) {
  return Api.request(`/todos/${todoId}`, { method: 'DELETE' })
}

export function deleteTodoItem(todoId, itemId) {
  return Api.request(`/todos/${todoId}/item/${itemId}`, { method: 'DELETE' })
}
