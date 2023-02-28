import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Profile extends Component {
  state = {
    updatedProfileList: [],
    profileLoaded: false,
  }

  componentDidMount() {
    this.onUpdatingProfile()
  }

  profileUpdating = each => ({
    profileImageUrl: each.profile_image_url,
    name: each.name,
    shortBio: each.short_bio,
  })

  onUpdatingProfile = async () => {
    const token = Cookies.get('jwtToken')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = this.profileUpdating(data.profile_details)

    this.setState({updatedProfileList: updatedData, profileLoaded: true})
  }

  render() {
    const {updatedProfileList, profileLoaded} = this.state
    const {name, profileImageUrl, shortBio} = updatedProfileList
    // console.log(updatedProfileList)

    return (
      <div>
        {profileLoaded ? (
          <div className="profile-success-cont">
            <img src={profileImageUrl} alt="profile" className="profile-pic" />
            <h1 className="profile-name">{name}</h1>
            <p className="profile-bio">{shortBio}</p>
          </div>
        ) : (
          <div className="retry-btn-cont">
            <button
              type="button"
              className="retry"
              onClick={this.onUpdatingProfile}
            >
              Retry
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Profile
