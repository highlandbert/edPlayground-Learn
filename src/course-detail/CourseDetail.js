import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './course-detail.css'
import Courses from '../data/courses'
import Results from '../data/results'
import { Course, Lesson, Level } from '../data/model'
import LessonBox from './Lesson/LessonBox'

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: new Course(),
      lessons: [],
      progress: 0
    };

    const courseId = props.match.params.id;
    Courses.get(courseId).then(course => this.setState({ course: course }));
    Courses.getLessons(courseId).then(lessons => this.setState({ lessons: lessons }));

    Results.getCourseResults(courseId)
      .then(lessonsResults => {
        const progress = Results.calcCourseProgress(lessonsResults);
        this.setState({ progress: progress });
      });

  }

  render() {

    let lessons = this.state.lessons.map(lesson => (
      <LessonBox key={lesson._id} lesson={lesson}/>)
    );

    const discussionLink = `/discussion/${this.state.course._id}`;

    return (
      <div>
        <div className="overview boxi">
          <h1>{this.state.course.name}</h1>
          <p>{this.state.course.description}</p>
          <progress className="progress is-success" value={this.state.progress} max="100">
            {this.state.progress}%
          </progress>
          <div className="discussion">
            <div>
              <p>Discussion</p>
              <p>
                Collaborate with your classmates and get coins
                &nbsp;<span className="platinum"></span>
                &nbsp;<span className="gold"></span>
              </p>
            </div>
            <Link to={discussionLink} className="ed-link"><i className="fas fa-comments"></i></Link>
          </div>
        </div>
        <div className="lessons">
          {lessons}
        </div>
      </div>
    );
  }
}