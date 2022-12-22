import React, { Component } from 'react'
import './style.css'

class Listing extends Component {
  render() {
    const { data } = this.props

    const result = Object.keys(Object.assign({}, ...data))
    // const tableHead = Object.keys(data); // -> array
    // const tableRow = Object.values(data); // -> array
    return (
      <table>
        <thead>
          <tr>
            {result.map((el, idx) => (
              <th key={idx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <img src={item.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Listing
