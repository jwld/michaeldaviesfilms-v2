import PropTypes from 'prop-types'
import React from 'react'

import * as SC from './style'

const Awards = ({ awards }) => (
  <SC.AwardsWrap>
    <SC.AwardsHeader>Awards</SC.AwardsHeader>

    <SC.CategoryList>
      {awards.wins.map(award => (
        <SC.Award key={`${award.festival}+${award.award}`}>
          {award.festival} • {award.award}
        </SC.Award>
      ))}
    </SC.CategoryList>
  </SC.AwardsWrap>
)

const awardPropType = PropTypes.shape({
  award: PropTypes.string.isRequired,
  festival: PropTypes.string.isRequired
})

Awards.propTypes = {
  awards: PropTypes.shape({
    nominations: PropTypes.arrayOf(awardPropType),
    shortlistings: PropTypes.arrayOf(awardPropType),
    wins: PropTypes.arrayOf(awardPropType)
  }).isRequired
}

export default Awards
