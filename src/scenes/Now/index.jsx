import React from 'react'

import { films, text } from './data'
import * as SC from './style'

const Now = () => (
  <SC.NowPage>
    <SC.NowText>
      {text.map((para, index) => (
        <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
      ))}
    </SC.NowText>

    <SC.FilmsWrap>
      {films.map(film => (
        <SC.FilmTile key={film.key}>
          <SC.Film image={film.key}></SC.Film>
        </SC.FilmTile>
      ))}
    </SC.FilmsWrap>
  </SC.NowPage>
)

export default Now
