import http from '../adapters/http/giphy'

export const getUsers = (results = 10) =>
  http.get(`./users?per_page=${results}`)
