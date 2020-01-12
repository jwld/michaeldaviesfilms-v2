import PropTypes from 'prop-types'
import React from 'react'

import { BASES } from 'constants/routes'

import * as SC from './style'

const Films = ({ films }) => (
  <SC.FilmsSection>
    {films.map(film => (
      <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
        <SC.FilmText>
          <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.type}
        </SC.FilmText>

        <SC.Film image={film.key}>
          {film.awards && <SC.AwardCount>{film.awards.length}</SC.AwardCount>}
        </SC.Film>
      </SC.FilmTile>
    ))}
  </SC.FilmsSection>
)

const filmPropType = PropTypes.shape({
  awards: PropTypes.array,
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
})

Films.propTypes = {
  films: PropTypes.arrayOf(filmPropType).isRequired
}

export default Films
