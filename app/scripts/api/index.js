import axios from 'axios'
import get from 'lodash/get'

/**
   * api util with axios
   * @memberof Home
   *
   */
const instance = axios.create({
  baseURL: 'http://localhost:3035',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(
  /**
   * Return response with returned data inside response
   * @memberof instance
   */
  (res) => {
    return get(res, 'data', res)
  },
  /**
   * Check errors array inside response
   * @memberof instance
   */
  error => {
    const response = get(error, 'response.data') || {}

    const errors = response.errors || []

    if (errors) {
      errors.forEach((error) => {
        console.log(error.message)
      })
    }

    return Promise.reject(response)
  }
)

export default instance
