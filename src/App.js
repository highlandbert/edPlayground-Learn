import React, {Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import Home from './home/Home'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}

export default App
