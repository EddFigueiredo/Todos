import reduce from 'lodash/reduce'
import snakeCase from 'lodash/snakeCase'
import get from 'lodash/get'

export function parsePayloadKeys({ data }) {
  return reduce(data, (result, val, key) => {
    result[snakeCase(key)] = val
    return result
  }, {})
}

export function getAuthorization() {
  return window.sessionStorage.getItem('Authorization')
}

export function getResponsetUrl(config) {
  return get(config, 'config').url
}
