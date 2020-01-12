import React from 'react'

import { text } from './data'
import * as SC from './style'

const Biography = () => (
  <SC.BiographyPage>
    <div />

    <SC.TextWrap>
      {text.map((para, index) => (
        <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
      ))}
    </SC.TextWrap>
  </SC.BiographyPage>
)

export default Biography
