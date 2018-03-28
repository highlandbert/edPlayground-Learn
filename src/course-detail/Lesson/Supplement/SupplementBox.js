import React, { Component } from 'react'

export default class SupplementBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const isCompleted = false;

    const iconClassName = isCompleted
      ? 'done fas fa-check-circle'
      : 'fas fa-circle';

    return (
      <div className="_level">
        <h3 className="name"><i className={iconClassName}></i>{this.props.supplement.name}</h3>
        <a className="ed-link">Open</a>
      </div>);
  }
}