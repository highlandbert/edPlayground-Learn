import React, { Component } from 'react'

export default class SupplementBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="_level supplement">
        <h3 className="name"><i className="fas fa-info-circle"></i>{this.props.supplement.name}</h3>
        <a className="ed-link">Open</a>
      </div>);
  }
}