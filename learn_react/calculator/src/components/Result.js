import React, { Component } from 'react'
import '../styles.css'

export class Result extends Component {
  render() {
    return (
      <div className='result'>
        <p>
            {this.props.result}
        </p>
      </div>
    )
  }
}

export default Result