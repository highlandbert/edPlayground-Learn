import React, { Component } from 'react'

export default class SupplementBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showContent: false
    }
  }

  showContent = () => this.setState({ showContent: true  });
  hideContent = () => this.setState({ showContent: false });

  render() {
    const contentClassName = this.state.showContent ? 'content show' : 'content';

    return (
      <div className="_level supplement">
        <h3 className="name"><i className="fas fa-info-circle"></i>{this.props.supplement.name}</h3>
        <a className="ed-link" onClick={this.showContent}>Open</a>
        <div className={contentClassName}>
          <div className="container">
            <h1>{this.props.supplement.name}</h1>
            <p dangerouslySetInnerHTML={{ __html: this.props.supplement.content }}></p>
            <a className="ed-link" onClick={this.hideContent}>Close</a>
          </div>
        </div>
      </div>);
  }
}