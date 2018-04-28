import React, { Component } from 'react'
import './loading.css'

export default class Loading extends Component {
  render() {
    return this.props.active ? <div className="loading"><div></div></div> : '';
  }
}