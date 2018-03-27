import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CourseBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const link = `/course/${this.props.course._id}`
    return (
      <div className="course">
          <h1>{this.props.course.name}</h1>
          <p className="short-desc">{this.props.course.description}</p>
          <progress className="progress is-success" value="60" max="100">60%</progress>
          <Link to={link} className="ed-link">Continue</Link>
      </div>
    );
  }
}