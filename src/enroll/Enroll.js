import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Loading from '../loading/Loading'
import Courses from '../data/courses'

export default class Enroll extends Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };

    const courseId = props.match.params.courseId;
    Courses.enroll(courseId).then(res => {
      this.setState({ done: true });
    });
  }

  render() {

    if (this.state.done) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <Loading active="true" />
      </div>
    );
  }
}