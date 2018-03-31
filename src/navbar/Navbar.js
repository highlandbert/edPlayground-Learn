import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './navbar.css'

const RoutedNavbar = withRouter(props => <Navbar {...props}/>);

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const homeClassName = this.props.location.pathname === '/home'
      ? 'ed-link home active'
      : 'ed-link home';

    return (
        <div className="navbar">
            <a href="#"className="ed-link brand">edPlayground</a>
            <a href="#" className="ed-link discover"><i className="fas fa-compass"></i></a>
            <Link to="/home" className={homeClassName}><i className="fas fa-th"></i></Link>
            <a href="/auth/account" className="ed-link user"><i className="fas fa-user-circle"></i></a>
        </div>
    );
  }
}

export default RoutedNavbar;