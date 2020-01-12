import React from 'react'

import { FilmGrid } from 'components'

import { films, text } from './data'
import * as SC from './style'

const Biography = () => (
  <SC.BiographyPage>
    <FilmGrid films={films} />

    <SC.TextWrap>
      {text.map((para, index) => (
        <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
      ))}
    </SC.TextWrap>
  </SC.BiographyPage>
)

export default Biography
