import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import CourseBox from './course/CourseBox'
import Courses from '../data/courses'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };

    Courses.getAll().then(courses => this.setState({ courses: courses}));
  }

  render() {

    if (this.state.courses.length === 0) {
      return (
        <div className="no-results">
          <h1>This looks too empty</h1>
          <a href="/discover">Find a course you may like</a>
        </div>
      );
    }

    let courses = this.state.courses.map(course => (
      <div key={course._id} className="column is-one-third">
        <CourseBox course={course} />
      </div>)
    );

    return (
      <div>
        <div className="columns">
          {courses}
        </div>
      </div>
    );
  }
}