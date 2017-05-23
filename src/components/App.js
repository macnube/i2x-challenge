import React, { Component } from 'react'
import Login from './Login'
import Results from './Results'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jwtToken: ''
    }

    this.handleStoreToken = this.handleStoreToken.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  componentDidMount () {
    let token = window.localStorage.getItem('jwtToken')
    console.log('token is from App: ', token)
    if (token) {
      this.setState({
        jwtToken: token
      })
    }
  }

  handleStoreToken (token) {
    console.log('token is: ', token)
    window.localStorage.setItem('jwtToken', token)
    this.setState({
      jwtToken: token
    })
  }

  handleLogOut () {
    console.log('user logging out')
    window.localStorage.clear('jwtToken')
    this.setState({
      jwtToken: ''
    })
  }

  render () {
    return (
      <div className='container'>
        {this.state.jwtToken
          ? (
            <Results
              jwtToken={this.state.jwtToken}
              handleLogOut={this.handleLogOut}
            />
          )
          : (
            <Login
              onReceiveToken={this.handleStoreToken}
            />
          )
        }
      </div>
    )
  }
}

export default App
