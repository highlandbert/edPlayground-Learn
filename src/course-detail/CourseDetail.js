import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './course-detail.css'
import { Courses } from '../data/courses'
import { Course, Lesson, Level } from '../data/model'
import LessonBox from './Lesson/LessonBox'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: new Course(),
      lessons: []
    };

    const courseId = props.match.params.id;
    Courses.get(courseId).then(course => this.setState({ course: course }));
    Courses.getLessons(courseId).then(lessons => this.setState({ lessons: lessons }));
  }

  render() {

    let lessons = this.state.lessons.map(lesson => (
      <LessonBox key={lesson._id} lesson={lesson}/>)
    );

    return (
      <div>
        <div className="overview">
          <h1>{this.state.course.name}</h1>
          <p>Lesson 2, Level 5</p>
          <progress className="progress is-success" value="60" max="100">60%</progress>
        </div>
        <div className="lessons">
          {lessons}
        </div>
      </div>
    );
  }
}