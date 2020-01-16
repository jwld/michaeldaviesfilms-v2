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

  const renderSection = section => {
    const hasProduction = !!section.company || !!section.production

    return (
      <SC.PageSection key={section.title}>
        <SC.VideoWrap>
          <SC.Title>{section.title}</SC.Title>

          <SC.VimeoFrame image={film.key} noVideo={!section.vimeoId}>
            {section.vimeoId && (
              <iframe
                allowFullScreen={1}
                mozallowfullscreen={1}
                src={`https://player.vimeo.com/video/${section.vimeoId}/?title=0&byline=0&portrait=0`}
                webkitallowfullscreen={1}
              />
            )}
          </SC.VimeoFrame>

          <SC.SubtitleWrap hasProduction={hasProduction}>
            <SC.Blurb
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
            {hasProduction && (
              <SC.ProductionInfo>
                {section.company && section.company}
                {section.production && ` • ${section.production}`}
              </SC.ProductionInfo>
            )}
          </SC.SubtitleWrap>
        </SC.VideoWrap>

        <SC.Accolades>
          {section.awards && (
            <SC.AwardsWrap>
              {section.awards.map(award => renderAward(award))}
            </SC.AwardsWrap>
          )}

          {section.reviews && (
            <SC.ReviewsWrap>
              {section.reviews.map(review => renderReview(review))}
            </SC.ReviewsWrap>
          )}
        </SC.Accolades>
      </SC.PageSection>
    )
  }

  return (
    <SC.FilmPage>
      {film.sections
        ? film.sections.map(section => renderSection(section))
        : renderSection(film)}
    </SC.FilmPage>
  )
}

export default Film
