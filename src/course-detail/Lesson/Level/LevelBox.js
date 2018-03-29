import React, { Component } from 'react'
import LevelsResults from '../../../data/levels-results'

export default class LevelBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      seconds: -1,
      ranking: -1,
    };

    LevelsResults.get(props.level._id)
      .then(result => {
        this.setState({ seconds: result.seconds });
        return LevelsResults.getRanking(result.seconds);
      })
      .then(ranking => this.setState({ ranking: ranking }));
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

    if (!hasResults)
      return (
        <div className="_level">
          <h3 className="name"><i className="fas fa-circle"></i>{this.props.level.name}</h3>
          <a className="ed-link">Start</a>
        </div>);

    return (
      <div className="_level">
        <h3 className="name"><i className="done fas fa-check-circle"></i>{this.props.level.name}</h3>
        <h3 className="mark"><i className="fas fa-clock"></i>{this.renderSeconds(this.state.seconds)}</h3>
        <h3 className="arrow"><i className="fas fa-arrow-right"></i></h3>
        <h3 className="mark"><i className="fas fa-trophy"></i>{ranking}</h3>
        <a className="ed-link">Repeat</a>
      </div>);
  }
}