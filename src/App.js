import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <Navbar/>
        <div className="section main">
          <div className="container">
            <div className="contents">
              <Router>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/home" />
                </Switch>
              </Router>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App
