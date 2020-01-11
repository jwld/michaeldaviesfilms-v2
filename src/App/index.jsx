import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import ROUTES from 'constants/routes'
import { Landing, Biography } from 'scenes'

import { NavBar, NotFound } from './components'

const App = () => (
  <>
    <NavBar />

    <Switch>
      <Route component={Landing} exact path={ROUTES.LANDING} />
      <Route component={Biography} path={ROUTES.BIOGRAPHY} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default hot(App)
