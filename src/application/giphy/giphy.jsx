import React, { useEffect, useState } from 'react'
import searchGiphy from '../../common/services/Gifs'

const Giphy = ({ search }) => {
  const getTermOfSearch = (q) => {
    const termSearch = q.split(' ').join('')
    return termSearch.slice(0, 3)
  }

  const paramQ = getTermOfSearch(search)

  const [giphy, setGiphy] = useState()

  const getGif = () => {
    searchGiphy(paramQ).then((res) => {
      const { data } = res.data
      setGiphy(data[0].images.original.url)
    })
  }

  useEffect(() => {
    getGif()
  }, [])

  return (
    <div>
      <img src={giphy} alt="" />{' '}
    </div>
  )
}

export default Giphy
