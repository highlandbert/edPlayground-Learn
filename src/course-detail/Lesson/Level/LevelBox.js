import React, { Component } from 'react'
import Results from '../../../data/results'

export default class LevelBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seconds: -1,
      ranking: -1,
    };

    Results.getLevelResults(props.level._id)
      .then(result => {
        if (result === undefined) {
          return Promise.reject();
        }
        this.setState({ seconds: result.seconds });
        return Results.getRanking(result.seconds);
      })
      .then(
        ranking => this.setState({ ranking: ranking }),
        () => {});
  }

  renderSeconds(seconds) {
    let h = 0, m = 0, s = 0;
    s = seconds % 60;
    m = Math.floor((seconds / 60) % 60);
    h = Math.floor((seconds / 60) / 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  render() {
    const hasResults = this.state.seconds != -1;

    const ranking = this.state.ranking !== -1 ? '#' + this.state.ranking : '-';

    const playLink = `/play?level=${this.props.level._id}&redirect=${location.pathname}`;

    if (!hasResults) {
      return (
        <div className="_level">
          <h3 className="name"><i className="fas fa-circle"></i>{this.props.level.name}</h3>
          <a href={playLink} className="ed-link">Start</a>
        </div>);
    }

    if (this.props.level.hasScores) {
      return (
        <div className="_level">
          <h3 className="name"><i className="done fas fa-check-circle"></i>{this.props.level.name}</h3>
          <h3 className="mark"><i className="fas fa-clock"></i>{this.renderSeconds(this.state.seconds)}</h3>
          <h3 className="arrow"><i className="fas fa-arrow-right"></i></h3>
          <h3 className="mark"><i className="fas fa-trophy"></i>{ranking}</h3>
          <a className="ed-link">Repeat</a>
        </div>);
    }

    return (
      <div className="_level">
        <h3 className="name"><i className="done fas fa-check-circle"></i>{this.props.level.name}</h3>
        <a className="ed-link">Repeat</a>
      </div>);
  }
}