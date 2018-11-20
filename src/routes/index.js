import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginContainer from '../modules/login/login';

class AppSource extends React.Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
        <Router>
            <Route exact path="/" component={LoginContainer} />
        </Router>
    )
  }
}

export default AppSource