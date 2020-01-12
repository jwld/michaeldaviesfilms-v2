import PropTypes from 'prop-types'
import React from 'react'

import { BASES } from 'constants/routes'

import * as SC from './style'

const Films = ({ films }) => (
  <SC.FilmsSection>
    {films.map(film => (
      <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
        <SC.FilmText>
          <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.subtitle}
        </SC.FilmText>

        <SC.Film image={film.key}>
          {film.awards && film.awards.wins && (
            <SC.AwardCount>{film.awards.wins.length}</SC.AwardCount>
          )}
        </SC.Film>
      </SC.FilmTile>
    ))}
  </SC.FilmsSection>
)

const awardPropType = PropTypes.shape({
  award: PropTypes.string.isRequired,
  festival: PropTypes.string.isRequired
})

const filmPropType = PropTypes.shape({
  awards: PropTypes.shape({
    nominations: PropTypes.arrayOf(awardPropType),
    shortlistings: PropTypes.arrayOf(awardPropType),
    wins: PropTypes.arrayOf(awardPropType)
  }).isRequired,
  blurb: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vimeoId: PropTypes.string.isRequired
})

Films.propTypes = {
  films: PropTypes.arrayOf(filmPropType).isRequired
}

export default Films
