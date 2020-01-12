import React from 'react'

import { films, text } from './data'
import * as SC from './style'

const Now = () => (
  <SC.NowPage>
    <SC.AboutSection>
      <SC.PortraitTitleWrap>
        <SC.Portrait />
        <SC.Title>
          Writer &<br />
          Director
        </SC.Title>
      </SC.PortraitTitleWrap>

      <SC.NowText>
        {text.map((para, index) => (
          <p dangerouslySetInnerHTML={{ __html: para }} key={index} />
        ))}
      </SC.NowText>
    </SC.AboutSection>

    <SC.FilmsWrap>
      {films.map(film => (
        <SC.FilmTile key={film.key}>
          <SC.Film image={film.key}>
            {film.awards.wins && (
              <SC.AwardCount>{film.awards.wins.length}</SC.AwardCount>
            )}
          </SC.Film>
        </SC.FilmTile>
      ))}
    </SC.FilmsWrap>
  </SC.NowPage>
)

export default Now
