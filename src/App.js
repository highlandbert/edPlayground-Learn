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
import Discussion from './discussion/Discussion';
import QuestionDetail from './discussion/QuestionDetail';
import NewQuestion from './discussion/NewQuestion';

class App extends Component {

  constructor(props) {
    super(props);

    if (!AuthService.hasCredentials()) {
      AuthService.doLogin();
    }
  }

  render() {
    // <Router>
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
                  <Route path="/discussion/:id" component={Discussion}/>
                  <Route path="/question/:courseId/:id" component={QuestionDetail}/>
                  <Route path="/newquestion/:id" component={NewQuestion} />
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
