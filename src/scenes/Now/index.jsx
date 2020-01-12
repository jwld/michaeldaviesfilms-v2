import React from 'react'

import { FilmGrid } from 'components'

import { About } from './components'
import { films } from './data'
import * as SC from './style'

const Now = () => (
  <SC.NowPage>
    <About />
    <FilmGrid films={films} />
  </SC.NowPage>
)

export default Now
