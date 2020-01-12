import React from 'react'

import films from './films'
import * as SC from './style'

const Landing = () => (
  <SC.Landing>
    <SC.FilmsWrap>
      {films.map(film => (
        <SC.FilmTile key={film.key}>
          <SC.Film image={film.key}></SC.Film>
        </SC.FilmTile>
      ))}
    </SC.FilmsWrap>
  </SC.Landing>
)

export default Landing
