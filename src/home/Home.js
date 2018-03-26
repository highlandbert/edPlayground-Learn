import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import CourseBox from './course/CourseBox'
import { Courses } from '../data/courses'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: []
    }

    Courses.getAll().then(courses => this.setState({ courses: courses}));
  }

  render() {
    
    let courses = this.state.courses.map(course => (
      <div key={course._id} className="column is-one-third">
        <CourseBox course={course} />
      </div>)
    );

    return (
      <div>
        <div className="columns">
          {courses}
          <div className="column is-one-third">
            <div className="course">
              <h1><i className="certificate fas fa-certificate"></i> Basics of programming</h1>
              <h2>Elwood Elementary</h2>
              <p className="short-desc">
                Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows,
                and on the strength of that one show they decide if they're going to make more shows.
              </p>
              <a className="button is-link">View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}