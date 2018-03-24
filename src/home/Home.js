import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import './home.css'

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-third">
            <div className="course">
              <progress className="progress is-success" value="60" max="100">60%</progress>
              <h1>Basics of programming</h1>
              <h2>Elwood Elementary</h2>
              <div className="results">
                <p className="last-level"><i class="fas fa-rocket"></i> Level 2 - 2</p>
                <p className="ranking"><i class="fas fa-trophy"></i> Ranking 3</p>
              </div>
              <a className="button is-link">Continue</a>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="course">
              <h1><i className="certificate fas fa-certificate"></i> Basics of programming</h1>
              <h2>Elwood Elementary</h2>
              <p className="short-desc">
                Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows,
                and on the strength of that one show they decide if they're going to make more shows.
              </p>
              <a className="button is-link">View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}