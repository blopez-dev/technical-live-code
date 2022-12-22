import http from '../adapters/http/giphy'

// const API_KEY = '2cZkiFTqyiS79UdSapL6LHWlublpl7iy'

export const getUsers = (results = 10) =>
  http.get(`./users?per_page=${results}`)
