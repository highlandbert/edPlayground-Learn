import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './course-detail.css'
import { Courses, Course } from '../data/courses'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: new Course()
    };

    const courseId = props.match.params.id;
    Courses.get(courseId).then(course => this.setState({ course: course }));
    Courses.getLessons(courseId).then(lessons => console.log(lessons));
  }

  render() {
    
    return (
      <div>
        <div className="overview">
          <h1>{this.state.course.name}</h1>
          <p>Lesson 2, Level 5</p>
          <progress className="progress is-success" value="60" max="100">60%</progress>
        </div>
        <div className="lessons">
          <div className="lesson">
            <i className="done fas fa-check-circle"></i>
            <h2>Lesson 1</h2>
          </div>
          <div className="lesson">
            <i className="fas fa-circle"></i>
            <h2>Lesson 2</h2>
          </div>
        </div>
      </div>
    );
  }
}