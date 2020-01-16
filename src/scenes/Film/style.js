import { cover } from 'polished'
import styled, { css } from 'styled-components'

import { components, media, mixins } from 'style'

export const FilmPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 4rem;
`

export const PageSection = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 47.5rem;

  ${media.m1150} {
    grid-gap: 0;
    grid-template-columns: auto;
  }
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

const backupStyle = css`
  background-color: transparent;
  background-image: url('images/thumbs/${props => props.image}.png');
  background-position: bottom;
  background-size: cover;
`

export const VimeoFrame = styled.div`
  background: black;
  border-radius: 0.4rem;
  height: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  ${props => props.noVideo && backupStyle};

  iframe {
    ${cover()};
    height: 100%;
    width: 100%;
  }
`

export const SubtitleWrap = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: ${props => props.hasProduction && '1fr auto'};

  ${media.m1250} {
    grid-template-columns: 1fr 32rem;
  }

  ${media.tablet} {
    grid-gap: 0.8rem;
    grid-template-columns: auto;
    padding-left: 0.7rem;
  }
`

export const Blurb = styled.span`
  padding-left: 0.7rem;

  ${media.tablet} {
    padding-left: 0;
  }
`

export const ProductionInfo = styled.span`
  text-align: right;
`

export const Accolades = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 2.5rem;
  padding-top: 3.5rem;

  ${media.m1150} {
    padding-top: 2rem;
  }
`

export const AwardsWrap = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  ${media.mobile} {
    margin: 0 auto;
    max-width: 25rem;
  }
`

export const Award = styled.div`
  align-content: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
`

export const Wreath = styled.div`
  align-self: center;
  background-image: url('images/half-wreath.png');
  background-repeat: no-repeat;
  background-size: contain;
  height: 8rem;
  transform: ${props => props.flip && 'scaleX(-1)'};
  width: 4.5rem;
`

export const AwardDetails = styled.div`
  display: grid;
  grid-gap: 0.2rem;

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

export const ReviewsWrap = styled.div`
  display: grid;
  grid-gap: 1.5rem;

  ${media.tablet} {
    padding-left: 1.5rem;
    width: 100%;
  }
`

export const Review = styled.div`
  display: grid;
  grid-gap: 0.3rem;
`

export const ReviewText = styled.span`
  font-style: italic;
`

export const ReviewSource = styled.span`
  padding-left: 1rem;
`
