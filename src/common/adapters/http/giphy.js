import axios from 'axios'

const URL = 'https://api.giphy.com/v1/gifs'

const instance = axios.create({
  baseURL: URL,
})
export default instance
