import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Route, Switch } from 'react-router-dom'

import ROUTES from 'constants/routes'
import { Landing } from 'scenes'

import { NotFound } from './components'

const App = () => (
  <Switch>
    <Route component={Landing} exact path={ROUTES.LANDING} />
    <Route component={NotFound} />
  </Switch>
)

export default hot(App)
