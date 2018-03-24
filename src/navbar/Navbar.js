import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="navbar">
            <a href="#"className="brand">edPlayground</a>
            <a href="#" className="discover"><i className="fas fa-compass"></i></a>
            <p className="user"><i className="fas fa-user-circle"></i></p>
            <div className="user-stuff">
            </div>
        </div>
    );
  }
}