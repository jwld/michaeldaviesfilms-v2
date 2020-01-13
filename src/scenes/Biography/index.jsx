import React from 'react'

import { FilmGrid } from 'components'

import { credits, films, text } from './data'
import * as SC from './style'

const compileCredits = () => {
  return credits.reduce((acc, credit, index) => {
    let string = index > 0 ? ' • ' : ''
    string += `<i>${credit.film}</i> (${credit.channel})`

    return (acc += string)
  }, '')
}

const Biography = () => (
  <SC.BiographyPage>
    <SC.TextWrap>
      {text.map((para, index) => (
        <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
      ))}
    </SC.TextWrap>

    <FilmGrid films={films} />

    <SC.CreditsWrap>
      <SC.CreditsHeader>Additional work</SC.CreditsHeader>

      <SC.CreditsList
        dangerouslySetInnerHTML={{ __html: compileCredits(credits) }}
      />
    </SC.CreditsWrap>
  </SC.BiographyPage>
)

export default Biography
