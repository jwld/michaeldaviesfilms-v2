import React from 'react'

import { FilmGrid } from 'components'

import { films, text } from './data'
import * as SC from './style'

const Now = () => (
  <SC.NowPage>
    <SC.AboutSection>
      <SC.PortraitTitleWrap>
        <SC.Portrait />
        <SC.Title>
          Writer &<br />
          Director
        </SC.Title>
      </SC.PortraitTitleWrap>

      <SC.TextWrap>
        {text.map((para, index) => (
          <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
        ))}
      </SC.TextWrap>
    </SC.AboutSection>

    <FilmGrid films={films} />
  </SC.NowPage>
)

export default Now
