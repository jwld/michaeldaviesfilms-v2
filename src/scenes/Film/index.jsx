import React from 'react'
import { useParams } from 'react-router-dom'

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
            allowFullScreen
            mozallowfullscreen
            src={`https://player.vimeo.com/video/${film.vimeoId}/?title=0&byline=0&portrait=0`}
            webkitallowfullscreen
          >
            ok
          </iframe>
        </SC.VimeoFrame>

        <SC.Blurb>{film.blurb}</SC.Blurb>
      </SC.VideoWrap>
    </SC.FilmPage>
  )
}

export default Film
