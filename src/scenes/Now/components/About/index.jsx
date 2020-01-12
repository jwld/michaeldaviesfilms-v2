import React from 'react'

import { text } from './data'
import * as SC from './style'

const About = () => (
  <SC.AboutSection>
    <SC.PortraitTitleWrap>
      <SC.Portrait />
      <SC.Title>
        Writer &<br />
        Director
      </SC.Title>
    </SC.PortraitTitleWrap>

    <SC.AboutText>
      {text.map((para, index) => (
        <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
      ))}
    </SC.AboutText>
  </SC.AboutSection>
)

export default About
