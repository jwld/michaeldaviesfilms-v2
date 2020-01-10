import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './App'
import GlobalStyle from './style/global'

const app = (
  <>
    <GlobalStyle />

    <HashRouter>
      <App />
    </HashRouter>
  </>
)

render(app, document.getElementById('root'))
