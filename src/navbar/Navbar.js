import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import './navbar.css'
import AuthService from '../auth.service'
import Discussions from '../data/discussions'

const RoutedNavbar = withRouter(props => <Navbar {...props}/>);

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: AuthService.getUsername(),
      gold: 0,
      platinum: 0
    };

    this.update();
    setInterval(this.update, 10000);
  }

  update = () => {
    Discussions.getUserGold(AuthService.getUserId())
      .then(gold => this.setState({gold: gold.length}));

    Discussions.getUserPlat(AuthService.getUserId())
      .then(platinum => this.setState({platinum: platinum.length}));
  }

  render() {
    const home= this.props.location.pathname === '/home'
      ? ''
      : <Link className="ed-link" to="/home"><i className="fas fa-th"></i></Link>;

    return (
        <div className="navbar">
            <a href="/"className="ed-link brand">edPlayground</a>
            <a href="/discover" className="ed-link discover"><i className="fas fa-compass"></i></a>
            {home}
            <div className="user">
              <p>{this.state.platinum} <span className="platinum"></span></p>
              <p>{this.state.gold} <span className="gold"></span></p>
              <p>{this.state.username}</p>
              <a href="/auth/account" className="ed-link"><i className="fas fa-user-circle"></i></a>
            </div>
        </div>
    );
  }
}

export default RoutedNavbar;