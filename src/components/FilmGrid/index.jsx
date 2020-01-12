import PropTypes from 'prop-types'
import React from 'react'

import { BASES } from 'constants/routes'

import * as SC from './style'

const countAwards = film => {
  return film.sections
    ? film.sections.reduce((acc, section) => (acc += section.awards.length), 0)
    : film.awards
    ? film.awards.length
    : 0
}

const Films = ({ films }) => (
  <SC.FilmsSection>
    {films.map(film => {
      const awardCount = countAwards(film)

      return (
        <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
          <SC.FilmText>
            <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.type}
          </SC.FilmText>

          <SC.Film image={film.key}>
            {awardCount > 0 && <SC.AwardCount>{awardCount}</SC.AwardCount>}
          </SC.Film>
        </SC.FilmTile>
      )
    })}
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
