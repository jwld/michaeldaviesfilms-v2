import React from 'react'

import { FilmGrid } from 'components'

import { credits, films, text } from './data'
import * as SC from './style'

const Biography = () => (
  <SC.BiographyPage>
    <SC.GridAboutWrap>
      <FilmGrid films={films} />

      <SC.TextWrap>
        {text.map((para, index) => (
          <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
        ))}
      </SC.TextWrap>
    </SC.GridAboutWrap>

    <SC.CreditsWrap>
      <SC.CreditsHeader>Additional work</SC.CreditsHeader>

      <SC.CreditsList>
        {credits.map(credit => (
          <SC.Credit key={credit.film}>
            <SC.CreditFilm>{credit.film}</SC.CreditFilm>
            <SC.CreditChannel>({credit.channel})</SC.CreditChannel>
          </SC.Credit>
        ))}
      </SC.CreditsList>
    </SC.CreditsWrap>
  </SC.BiographyPage>
)

export default Biography
