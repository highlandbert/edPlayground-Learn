import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './discussion.css'

export default class QuestionDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      courseId: 0
    };

    const questionId = props.match.params.id;
    console.log(questionId);
  }

  render() {

    const backLink = `/discussion/${this.props.match.params.courseId}`;

    return (
      <div>
        <Link to={backLink} className="ed-link">Back to discussion</Link>
        <div className="question">
          <h3>Why do we exists?</h3>
          <p>
            Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.
            You don't get sick, I do. That's also clear.
          </p>
          <div className="info">
            <p>roberto</p><p>08/04/2018 14:23</p>
          </div>
        </div>

        <div className="answer">
          <p>
            Because we do
          </p>
          <div className="info">
            <p>roberto</p><p>08/04/2018 14:53</p>
          </div>
        </div>

        <div className="new-answer">
          <textarea></textarea>
          <a className="ed-link" href="#">Reply</a>
        </div>
      </div>
    );
  }
}