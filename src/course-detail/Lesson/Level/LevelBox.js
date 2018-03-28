import React, { Component } from 'react'

export default class LevelBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const hasResults = false;

    if (!hasResults)
      return (
        <div className="_level">
          <h3 className="name"><i className="fas fa-circle"></i>{this.props.level.name}</h3>
          <a className="ed-link">Start</a>
        </div>);

    return (
      <div className="_level">
        <h3 className="name"><i className="done fas fa-check-circle"></i>{this.props.level.name}</h3>
        <h3 className="mark"><i className="fas fa-clock"></i>00:01:27</h3>
        <h3 className="arrow"><i className="fas fa-arrow-right"></i></h3>
        <h3 className="mark"><i className="fas fa-trophy"></i>#3456</h3>
        <a className="ed-link">Repeat</a>
      </div>);
  }
}