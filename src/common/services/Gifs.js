import http from '../adapters/http/giphy'

const API_KEY = '2cZkiFTqyiS79UdSapL6LHWlublpl7iy'

const searchGiphy = (search) =>
  http.get(`./search?api_key=${API_KEY}&q=${search}&limit=1`)

export default searchGiphy
