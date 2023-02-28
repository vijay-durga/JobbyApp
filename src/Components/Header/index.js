import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'

import {MdLocalPostOffice} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import {Link, withRouter} from 'react-router-dom'

// import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  onClickingLogoutBtn = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div className="header-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo-header"
          />
        </div>
        <ul className="ul-header-cont">
          <li className="mobile-home">
            <Link to="/">
              <AiFillHome size="30" className="mobile-home-style" />
            </Link>
          </li>
          <li className="pc-home">
            <Link to="/" className="line-style">
              Home
            </Link>
          </li>

          <li className="mobile-home">
            <Link to="/jobs">
              <MdLocalPostOffice size="30" className="mobile-home-style" />
            </Link>
          </li>

          <li>
            <Link to="/jobs" className="line-style">
              Jobs
            </Link>
          </li>
        </ul>
        <FiLogOut
          className="mobile-logoutBtn"
          onClick={this.onClickingLogoutBtn}
        />
        <div>
          <button
            type="button"
            className="logoutBtn"
            onClick={this.onClickingLogoutBtn}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)
