import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import { onRequestSuccess, onResponseError, onResponseSuccess } from '../interceptors'

const api = axios.create({
  mode: 'cors'
})

const getBasicConfig = () => ({
  baseURL: global.ENVIRONMENT_CONFIG.baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US'
  }
})

api.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, getBasicConfig())
  return api(path, mergedOptions)
}

api.interceptors.request.use(onRequestSuccess)
api.interceptors.response.use(onResponseSuccess, onResponseError)

export default api
