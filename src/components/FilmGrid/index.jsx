import PropTypes from 'prop-types'
import React from 'react'

import { BASES } from 'constants/routes'

import * as SC from './style'

const hasAwards = film => {
  return film.sections
    ? film.sections.reduce((acc, section) => acc || !!section.awards, false)
    : !!film.awards
}

const Films = ({ films }) => (
  <SC.FilmsSection>
    {films.map(film => (
      <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
        <SC.FilmText title={`${film.title} • ${film.type}`}>
          <SC.FilmTitle>{film.title}</SC.FilmTitle>
        </SC.FilmText>

        <SC.Film image={film.key}>{hasAwards(film) && <SC.Wreath />}</SC.Film>
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
