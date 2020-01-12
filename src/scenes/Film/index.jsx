import React from 'react'
import { useParams } from 'react-router-dom'

import { getFilm } from './helpers'
import * as SC from './style'

const Film = () => {
  const { key } = useParams()
  console.log(getFilm(key))

  return <SC.FilmPage>Film</SC.FilmPage>
}

export default Film
