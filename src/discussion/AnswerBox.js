import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Discussions from '../data/discussions'
import AuthService from '../auth.service'

export default class AnswerBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gold: []
    };

    this.update();
  }

  update = () => 
    Discussions.getAnswerGold(this.props.answer._id)
      .then(gold => this.setState({gold}));

  userGivenGold = () =>
    this.state.gold.find(gold => gold.user === AuthService.getUserId());

  giveGold = (event) => {
    event.preventDefault();

    Discussions.createGold(this.props.answer._id)
      .then(result => this.update());
  }

  takeGold = (event) => {
    event.preventDefault();
    
    const gold = this.userGivenGold();
    Discussions.deleteGold(gold._id)
      .then(result => this.update());
  }

  render() {

    const goldCount = this.state.gold.length;

    const goldLink = this.userGivenGold() !== undefined
      ? <a href="#" onClick={this.takeGold}>Drop coin</a>
      : <a href="#" onClick={this.giveGold}>Give coin</a>

    return (
      <div key={this.props.answer._id} className="answer">
        <p>{this.props.answer.content}</p>
        <div className="info">
          <p>{this.props.answer.user}</p><p>{this.props.answer.created.toLocaleString()}</p>
          <div>
            <p>{goldCount} <span className="gold"></span></p>
            <p>{goldLink}</p>
          </div>
        </div>
      </div>
    );
  }
}