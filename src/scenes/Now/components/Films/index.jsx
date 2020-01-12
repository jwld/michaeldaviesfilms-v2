import React from 'react'

import { BASES } from 'constants/routes'

import { films } from './data'
import * as SC from './style'

const Films = () => (
  <SC.FilmsSection>
    {films.map(film => (
      <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
        <SC.Film image={film.key}>
          <SC.Overlay>
            <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.subtitle}
          </SC.Overlay>

          {film.awards.wins && (
            <SC.AwardCount>{film.awards.wins.length}</SC.AwardCount>
          )}
        </SC.Film>
      </SC.FilmTile>
    ))}
  </SC.FilmsSection>
)

export default Films
