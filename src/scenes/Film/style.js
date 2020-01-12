import { cover } from 'polished'
import styled from 'styled-components'

import { components, mixins } from 'style'

export const FilmPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 47.5rem;
`

export const VideoWrap = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 0.5rem;
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

export const Accolades = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 1.5rem;
`

export const AwardsWrap = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`

export const Award = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`

export const Wreath = styled.div`
  background-image: url('images/half-wreath.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 8rem;
  transform: ${props => props.flip && 'scaleX(-1)'};
  width: 4.5rem;
`

export const AwardDetails = styled.div`
  display: grid;

  span {
    ${mixins.flex};
    text-align: center;
  }
`

export const Result = styled.span`
  align-self: flex-end;
  font-weight: 400;
  text-transform: uppercase;
`

export const Category = styled.span`
  font-size: 1.4rem;
`

export const Festival = styled.span`
  align-self: flex-start;
  font-size: 1.4rem;
  font-style: italic;
`
