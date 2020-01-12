import React from 'react'
import { useParams } from 'react-router-dom'

import { Awards } from './components'
import { getFilm } from './helpers'
import * as SC from './style'

const Film = () => {
  const { key } = useParams()
  const film = getFilm(key)

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

        <SC.Blurb>{film.blurb}</SC.Blurb>
      </SC.VideoWrap>

      {film.awards && (
        <SC.AwardsWrap>
          <Awards awards={film.awards.wins} title="Won" />
          <Awards awards={film.awards.nominations} title="Nominated" />
          <Awards awards={film.awards.shortlistings} title="Shortlisted" />
        </SC.AwardsWrap>
      )}
    </SC.FilmPage>
  )
}

export default Film
