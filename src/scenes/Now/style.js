import { cover } from 'polished'
import styled from 'styled-components'

import { components, mixins } from 'style'

export const NowPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 40rem 2fr;
`

export const AboutSection = styled.section`
  align-content: flex-start;
  display: grid;
  grid-gap: 2rem;
`

export const PortraitTitleWrap = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto auto;
  margin: 0 auto;
  margin-top: 1.5rem;
`

const portraitSize = '20rem'

export const Portrait = styled.div`
  background-image: url('images/portrait.png');
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  height: ${portraitSize};
  width: ${portraitSize};
`

export const Title = styled.span`
  ${mixins.flex};

  font-style: italic;
  text-align: center;
`

export const NowText = styled.div`
  align-content: flex-start;
  display: grid;
  grid-gap: 1rem;
`

export const FilmsWrap = styled.section`
  align-content: flex-start;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
`

export const FilmTile = styled.div`
  padding-bottom: 56.25%;
  position: relative;
`

export const Film = styled.div`
  ${cover()};
  ${mixins.flex};

  background-image: url('images/${props => props.image}.png');
  background-position: center;
  background-size: cover;
  border-radius: 0.3rem;
  box-shadow: 0 0.8rem 1rem -0.5rem black;
  cursor: pointer;
`

const countSize = '6rem'
const countOffset = '1rem'

export const AwardCount = styled.div`
  ${mixins.flex};

  background: white;
  background-image: url('images/wreath.png');
  background-position: center 90%;
  background-repeat: no-repeat;
  background-size: 88%;
  border-radius: 50%;
  bottom: ${countOffset};
  box-shadow: 0 0.5rem 1rem -0.5rem black;
  color: #ccad00;
  font-weight: 400;
  height: ${countSize};
  position: absolute;
  right: ${countOffset};
  width: ${countSize};
`
