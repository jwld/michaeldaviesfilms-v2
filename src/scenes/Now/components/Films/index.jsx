import React from 'react'

import { BASES } from 'constants/routes'

import { films } from './data'
import * as SC from './style'

const Films = () => (
  <SC.FilmsSection>
    {films.map(film => (
      <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
        <SC.FilmText>
          <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.subtitle}
        </SC.FilmText>

        <SC.Film image={film.key}>
          {film.awards.wins && (
            <SC.AwardCount>{film.awards.wins.length}</SC.AwardCount>
          )}
        </SC.Film>
      </SC.FilmTile>
    ))}
  </SC.FilmsSection>
)

export default Films
