import {Component} from 'react'

import './index.css'

class Filter extends Component {
  render() {
    const {salaryRangesList, employmentTypesList} = this.props
    return (
      <div className="employ-cont">
        <h1>Type of Employment</h1>
        {employmentTypesList.map(each => (
          <div className="checkBox-cont">
            <input
              className="checkbox"
              type="checkbox"
              id={each.employmentTypeId}
            />
            <label className="checkbox-para" htmlFor={each.employmentTypeId}>
              {each.label}
            </label>
          </div>
        ))}

        <hr className="line" />

        <h1>Salary Range</h1>

        {salaryRangesList.map(each => (
          <div>
            <input
              className="radio"
              type="radio"
              id={each.salaryRangeId}
              name="radio-disc"
            />
            <label className="checkbox-para" htmlFor={each.salaryRangeId}>
              {each.label}
            </label>
          </div>
        ))}
      </div>
    )
  }
}

export default Filter
