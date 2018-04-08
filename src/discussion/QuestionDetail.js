import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './discussion.css'
import { Question } from '../data/model'
import Discussions from '../data/discussions'

export default class QuestionDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: new Question(),
      replyContent: '',
      answers: []
    };

    const questionId = props.match.params.id;
    
    Discussions.getQuestion(questionId)
      .then(question => {
        this.setState({ question: question });
        this.updateAnswers();
      });
  }

  updateAnswers = () => {
    Discussions.getAnswers(this.state.question._id)
      .then(answers => this.setState({ answers: answers }));
  };

  reply = (event) => {
    event.preventDefault();

    Discussions.createAnswer(this.state.replyContent, this.state.question._id)
      .then(result => {
        if (result.done) {
          this.setState({ replyContent: '' });
          this.updateAnswers();
        }
      });
  };

  replyContentChanged = (event) => this.setState({ replyContent: event.target.value });

  render() {

    const backLink = `/discussion/${this.props.match.params.courseId}`;

    const answers = this.state.answers.map(answer => {

      return (
        <div key={answer._id} className="answer">
          <p>{answer.content}</p>
          <div className="info">
            <p>{answer.user}</p><p>{answer.created.toLocaleString()}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Link to={backLink} className="ed-link">Back to discussion</Link>
        <div className="question">
          <h3>{this.state.question.title}</h3>
          <p>{this.state.question.content}</p>
          <div className="info">
            <p>{this.state.question.user}</p>
            <p>{this.state.question.created.toLocaleString()}</p>
          </div>
        </div>

        {answers}

        <div className="new-answer">
          <textarea value={this.state.replyContent} onChange={this.replyContentChanged}></textarea>
          <a className="ed-link" href="#" onClick={this.reply}>Reply</a>
        </div>
      </div>
    );
  }
}