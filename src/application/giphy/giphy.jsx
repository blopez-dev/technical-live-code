import React, { Component } from 'react'
import { getUsers } from '../../common/services/Gifs'
import Listing from '../../common/components/Listing.jsx'

class Giphy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      giphy: [],
    }
  }

  componentDidMount() {
    getUsers(10).then((res) => {
      const { data } = res.data
      this.setState({
        giphy: data,
      })
    })
  }

  render() {
    const { giphy } = this.state
    return (
      <div>
        <Listing data={giphy} />
      </div>
    )
  }
}
export default Giphy
