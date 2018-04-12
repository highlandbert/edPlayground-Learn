import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './discussion.css'
import { Question } from '../data/model'
import AnswerBox from './AnswerBox'
import QuestionBox from './QuestionBox'
import Discussions from '../data/discussions'

export default class QuestionDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: undefined,
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

    const question = this.state.question !== undefined
      ? <QuestionBox question={this.state.question} />
      : '';

    const answers = this.state.answers.map(answer => (
      <AnswerBox key={answer._id} answer={answer} />
    ));

    return (
      <div>
        <Link to={backLink} className="ed-link">Back to discussion</Link>
        {question}
        {answers}
        <div className="new-answer">
          <textarea value={this.state.replyContent} onChange={this.replyContentChanged}></textarea>
          <a className="ed-link" href="#" onClick={this.reply}>Reply</a>
        </div>
      </div>
    );
  }
}