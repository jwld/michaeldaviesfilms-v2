import PropTypes from 'prop-types'
import React from 'react'

import { BASES } from 'constants/routes'

import { countWins } from './helpers'
import * as SC from './style'

const Films = ({ films }) => (
  <SC.FilmsSection>
    {films.map(film => {
      const wins = countWins(film.awards)

      return (
        <SC.FilmTile key={film.key} to={`${BASES.FILM}/${film.key}`}>
          <SC.FilmText>
            <SC.FilmTitle>{film.title}</SC.FilmTitle> • {film.type}
          </SC.FilmText>

          <SC.Film image={film.key}>
            {!!wins && <SC.AwardCount>{countWins(film.awards)}</SC.AwardCount>}
          </SC.Film>
        </SC.FilmTile>
      )
    })}
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
