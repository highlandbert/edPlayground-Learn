import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './discussion.css'

export default class Discussion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };

    const courseId = props.match.params.id;
    console.log('discussion');
  }

  render() {
    const backLink = `/course/${this.props.match.params.id}`;

    return (
      <div>
        <Link to={backLink} className="ed-link">Back to course</Link>
        <div className="question-link">
          <h3><i className="fas fa-thumbtack"></i> Welcome to Aprende a Programar!</h3>
          <p>edPlayground</p>
          <a href="#" className="ed-link">Open</a>
        </div>
        <div className="question-link">
          <h3>Why do we exists?</h3>
          <p>roberto</p>
          <p>08/04/2018 14:23</p>
          <a href="#" className="ed-link">Open</a>
        </div>
      </div>
    );
  }
}