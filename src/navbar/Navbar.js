import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

  constructor(props) {
    super(props);

    //https://github.com/ReactTraining/history#listening
    history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`)
    });
  }

  render() {
    return (
        <div className="navbar">
            <a href="#"className="brand">edPlayground</a>
            <a href="#" className="discover"><i className="fas fa-compass"></i></a>
            <Link to="/home" className="home active"><i className="fas fa-th"></i></Link>
            <p className="user"><i className="fas fa-user-circle"></i></p>
            <div className="user-stuff">
            </div>
        </div>
    );
  }
}