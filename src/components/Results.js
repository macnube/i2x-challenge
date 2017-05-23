import React, { Component } from 'react'
import { i2xGetMedia } from '../utils/api'
import { formatTime } from '../utils/helpers'
import lightStar from '../images/lightStar.png'
import darkStar from '../images/darkStar.png'

class Results extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mediaResults: []
    }

    this.handleGetMedia = this.handleGetMedia.bind(this)
  }
  handleGetMedia () {
    i2xGetMedia(this.props.jwtToken)
    .then((res) => {
      console.log(res)
      this.setState({
        mediaResults: res
      })
    })
  }

  getStars (stars) {
    let starArray = []
    console.log(stars)
    for (let i = 1; i <= 5; i++) {
      let starURI = stars >= i ? lightStar : darkStar
      starArray.push(
        (
          <img key={i} src={starURI} className='star' />
        )
      )
    }
    return starArray
  }

  render () {
    let media = this.state.mediaResults.map((obj) => {
      return (
        <div
          key={obj.created}
          className='media'>
          <span>{obj.final_script}</span>
          <div className='media-info'>
            <audio controls>
              <source src={obj.url} type="audio/mpeg" />
            </audio>
            <span>{this.getStars(obj.rating)}</span>
            <span>{formatTime(obj.duration)}</span>
          </div>
        </div>
      )
    })
    return (
      <div className='results-container'>
        <div className='header-container'>
          <h1>i2x Media Interface</h1>
        </div>
        <div className='button-container'>
          <button
            className='media-button'
            onClick={this.handleGetMedia}>
            Get Media Results
          </button>
          <button
            className='media-button'
            onClick={this.props.handleLogOut}>
            Logout
          </button>
        </div>
        {media}
      </div>
    )
  }
}

export default Results