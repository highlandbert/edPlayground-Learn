import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import AuthService from './auth.service'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
import CourseDetail from './course-detail/CourseDetail'

class App extends Component {

  constructor(props) {
    super(props);

    if (!AuthService.hasCredentials()) {
      AuthService.doLogin();
    }
  }

  render() {
    return (
      <Router basename="/learn">
        <div className="page">
          <Navbar/>
          <div className="section main">
            <div className="container">
              <div className="contents">

                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/course/:id" component={CourseDetail}/>
                  <Redirect to="/home" />
                </Switch>

              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
