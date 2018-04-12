import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Discussions from '../data/discussions'
import AuthService from '../auth.service'

export default class QuestionBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      platinum: []
    };

    this.update();
  }

  update = () => 
    Discussions.getQuestionPlat(this.props.question._id)
      .then(platinum => this.setState({platinum}));

  userGivenPlat = () =>
    this.state.platinum.find(platinum => platinum.user === AuthService.getUserId());

  givePlat = (event) => {
    event.preventDefault();

    Discussions.createPlat(this.props.question._id)
      .then(result => this.update());
  }

  takePlat = (event) => {
    event.preventDefault();
    
    const platinum = this.userGivenPlat();
    Discussions.deletePlat(platinum._id)
      .then(result => this.update());
  }

  render() {

    const platinumCount = this.state.platinum.length;

    const platinumLink = this.userGivenPlat() !== undefined
      ? <a href="#" onClick={this.takePlat}>Drop coin</a>
      : <a href="#" onClick={this.givePlat}>Give coin</a>

    return (
      <div className="question">
        <h3>{this.props.question.title}</h3>
        <p>{this.props.question.content}</p>
        <div className="info">
            <p>{this.props.question.user}</p>
            <p>{this.props.question.created.toLocaleString()}</p>
            <div>
              <p>{platinumCount} <span className="platinum"></span></p>
              <p>{platinumLink}</p>
            </div>
        </div>
      </div>
    );
  }
}