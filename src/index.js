import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import GlobalStyle from './style/global'

const app = (
  <>
    <GlobalStyle />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)

render(app, document.getElementById('root'))
