import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './style'

const Awards = ({ awards, title }) => {
  if (!awards) return null

  return (
    <SC.Awards>
      <SC.CategoryHeader>{title}</SC.CategoryHeader>

      <SC.CategoryList>
        {awards.map(award => (
          <SC.Award key={`${award.festival}+${award.award}`}>
            <span>{award.festival}</span>
            <span>{award.award}</span>
          </SC.Award>
        ))}
      </SC.CategoryList>
    </SC.Awards>
  )
}

const awardPropType = PropTypes.shape({
  award: PropTypes.string.isRequired,
  festival: PropTypes.string.isRequired
})

Awards.propTypes = {
  awards: PropTypes.arrayOf(awardPropType),
  title: PropTypes.string.isRequired
}

export default Awards
