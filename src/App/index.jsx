import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Link, Route, Switch } from 'react-router-dom'

import { NavBar, NotFound } from './components'

const App = () => (
  <>
    <NavBar />

    <Switch>
      <Route component={() => <Link to="/test">Test</Link>} exact path="/" />
      <Route component={() => <Link to="/">Home</Link>} path="/test" />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default hot(App)
