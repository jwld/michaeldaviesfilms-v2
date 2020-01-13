import React from 'react'

import { FilmGrid } from 'components'

import { films, text } from './data'
import * as SC from './style'

const Now = () => (
  <SC.NowPage>
    <SC.AboutSection>
      <SC.PortraitTitleWrap>
        <SC.Portrait />
        <SC.Title>Michael Davies</SC.Title>
        <SC.JobTitle>Writer & Director</SC.JobTitle>
      </SC.PortraitTitleWrap>

      <SC.TextWrap>
        {text.map((para, index) => (
          <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
        ))}
      </SC.TextWrap>
    </SC.AboutSection>

    <FilmGrid films={films} tileMin="35rem" />
  </SC.NowPage>
)

export default Now
