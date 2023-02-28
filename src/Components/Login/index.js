import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMsg: '',
  }

  changingUserName = event => {
    this.setState({username: event.target.value})
  }

  changingPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwtToken', jwtToken, {expires: 30})
    history.replace('/')
    // console.log(jwtToken)
  }

  onSubmitError = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
    // console.log(data)
  }

  render() {
    const {username, password, showErrorMessage, errorMsg} = this.state
    // console.log(password)
    return (
      <div className="bg-cont">
        <div className="bg-login-cont">
          <div className="website-logo-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <form className="bg-form-cont" onSubmit={this.onSubmitForm}>
            <div className="user-label-cont">
              <label htmlFor="username" className="input-label">
                UserName
              </label>
              <input
                type="text"
                id="username"
                className="input-text"
                onChange={this.changingUserName}
                value={username}
              />
            </div>

            <div className="user-label-cont">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input-text"
                onChange={this.changingPassword}
                value={password}
              />
            </div>

            <button className="button" type="submit">
              Login
            </button>
          </form>
          {showErrorMessage && <p className="error-message">*{errorMsg} </p>}
        </div>
      </div>
    )
  }
}

export default Login
