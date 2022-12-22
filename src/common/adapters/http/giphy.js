import axios from 'axios'

const URL = 'https://reqres.in/api'

const instance = axios.create({
  baseURL: URL,
})
export default instance
