import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="footer">
            <a href="#">Need help?</a>
            <a href="#">FAQ</a>
        </div>
    );
  }
}