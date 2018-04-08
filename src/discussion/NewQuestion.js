import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Discussions from '../data/discussions';

export default class NewQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      done: false
    };
  }

  contentChanged = (event) => this.setState({ content: event.target.value });
  titleChanged = (event) => this.setState({ title: event.target.value });
  
  submit = (event) => {
    event.preventDefault();

    Discussions.createQuestion(this.state.title, this.state.content, this.props.match.params.id)
      .then(result => {
        if (result.done) {
          this.setState({ done: true });
        }
      });
  };

  render() {

    const backLink = `/discussion/${this.props.match.params.id}`;

    if (this.state.done) {
      return <Redirect to={backLink} />;
    }

    return (
      <div>
        <Link to={backLink} className="ed-link">Back to discussion</Link>
        <div className="new-question">
          <h3>Make a new question</h3>
          <input type="text" value={this.state.title} onChange={this.titleChanged} placeholder="Title"/>
          <textarea value={this.state.content} onChange={this.contentChanged}></textarea>
          <a className="ed-link" href="#" onClick={this.submit}>Submit</a>
        </div>
      </div>
    );
  }
}