import React from 'react'
import { useParams } from 'react-router-dom'

import { getFilm } from './helpers'
import * as SC from './style'

const Film = () => {
  const { key } = useParams()
  const film = getFilm(key)

  const renderAward = award => (
    <SC.Award key={`${award.festival}+${award.award}`}>
      <SC.Wreath />
      <SC.AwardDetails>
        <SC.Result>{award.result}</SC.Result>
        <SC.Category>{award.award}</SC.Category>
        <SC.Festival>{award.festival}</SC.Festival>
      </SC.AwardDetails>
      <SC.Wreath flip />
    </SC.Award>
  )

  const renderReview = review => (
    <SC.Review key={review.source}>
      <SC.ReviewText>{review.review}</SC.ReviewText>
      <SC.ReviewSource>{review.source}</SC.ReviewSource>
    </SC.Review>
  )

  return (
    <SC.FilmPage>
      <SC.VideoWrap>
        <SC.Title>{film.title}</SC.Title>

        <SC.VimeoFrame>
          <iframe
            allowFullScreen={1}
            mozallowfullscreen={1}
            src={`https://player.vimeo.com/video/${film.vimeoId}/?title=0&byline=0&portrait=0`}
            webkitallowfullscreen={1}
          >
            ok
          </iframe>
        </SC.VimeoFrame>

        <SC.Blurb dangerouslySetInnerHTML={{ __html: film.description }} />
      </SC.VideoWrap>

      <SC.Accolades>
        {film.awards && (
          <SC.AwardsWrap>
            {film.awards.map(award => renderAward(award))}
          </SC.AwardsWrap>
        )}

        {film.reviews && (
          <SC.ReviewsWrap>
            {film.reviews.map(review => renderReview(review))}
          </SC.ReviewsWrap>
        )}
      </SC.Accolades>
    </SC.FilmPage>
  )
}

export default Film
