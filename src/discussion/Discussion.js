import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './discussion.css'
import Discussions from '../data/discussions'

export default class Discussion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };

    const courseId = props.match.params.id;
    Discussions.getQuestions(courseId)
      .then(questions => this.setState({ questions: questions }));
  }

  render() {
    const backLink = `/course/${this.props.match.params.id}`;
    const newLink = `/newquestion/${this.props.match.params.id}`;

    const questions = this.state.questions.map(question => {
      const link = `/question/${this.props.match.params.id}/${question._id}`;
      return (
        <div key={question._id} className="question-link boxi">
          <h3>{question.title}</h3>
          <p>{question.user}</p>
          <p>{question.created.toLocaleString()}</p>
          <Link to={link} className="ed-link">Open</Link>
        </div>
      );
    });

    return (
      <div className="discus">
        <Link to={backLink} className="ed-link separated">Back to course</Link>
        <Link to={newLink} className="ed-link">New Question</Link>
        {questions}
      </div>
    );
  }
}