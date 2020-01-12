import { cover } from 'polished'
import styled from 'styled-components'

import { components } from 'style'

export const FilmPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr auto;
`

export const VideoWrap = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 0.5rem;
  max-width: 100rem;
`

export const Title = styled.h1`
  font-size: 1.7rem;
  font-style: italic;
  font-weight: 400;
`

export const VimeoFrame = styled.div`
  background: black;
  border-radius: 0.4rem;
  height: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    ${cover()};
    height: 100%;
    width: 100%;
  }
`

export const Blurb = styled.span`
  padding: 0 0.7rem;
`

export const AwardsWrap = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 1.5rem;
`
