import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  onClickingFindJobBtn = () => {
    const {history} = this.props
    history.replace('/jobs')
  }

  render() {
    return (
      <div>
        <div className="home-cont">
          <Header />
          <div className="home-cont-text">
            <h1 className="home-heading">Find The Job That Fits Your Life</h1>
            <p className="home-paragraph">
              Millions of people are searching for jobs, salary information,
              company reviews. Find the job that fits your abilities and
              potential.
            </p>
            <div>
              <Link to="/jobs">
                <button
                  type="button"
                  className="home-find-job-button"
                  onClick={this.onClickingFindJobBtn}
                >
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
