import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'

import Header from '../Header'
import Profile from '../Profile'
import Filter from '../Filter'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="search-container">
          <div className="search-container-sub">
            <input
              type="search"
              placeholder="Search"
              className="search-input-cont-item"
            />
            <BiSearch className="search-image" size="25" />
          </div>
        </div>
        <div className="jobs-container">
          <div className="profile-container">
            <Profile />
            <hr className="line" />
            <Filter
              employmentTypesList={employmentTypesList}
              salaryRangesList={salaryRangesList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
