import React, { Component } from 'react'
import { i2xLogin } from '../utils/api'
import { checkLogin } from '../utils/helpers'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange (event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { email, password } = this.state
    if (checkLogin(email, password)) {
      console.log('here')
      i2xLogin(email, password)
      .then((res) => {
        this.props.onReceiveToken(res.data.token)
      })
      .catch((err) => {
        this.setState({
          error: err
        })
      })
    } else {
      console.log('error')
      this.setState({
        error: 'Not a valid email & password combination'
      })
    }
  }

  render () {
    return (
      <div className='login-container'>
        <h2>i2x Challenge</h2>
        <h3>Please Sign In</h3>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <input
            id='email'
            placeholder='Email Address'
            type='text'
            autoComplete='off'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <input
            id='password'
            placeholder='Password'
            type='password'
            autoComplete='off'
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button
            className='media-button'
            type='submit'
            disabled={!this.state.username && !this.state.password}>
            Sign in
          </button>
        </form>
        <div className='error-container'>
          {this.state.error}
        </div>
      </div>
    )
  }
}

export default Login

