import { cover, ellipsis } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { media, mixins } from 'style'

export const FilmsSection = styled.section`
  align-content: flex-start;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.tileMin}, 1fr)
  );

  ${media.mobile} {
    grid-template-columns: auto;
  }
`

const filmTitleHeight = '2.5rem'

export const FilmTile = styled(Link)`
  padding-bottom: 56.25%;
  position: relative;

  ${media.mobile} {
    padding-bottom: calc(56.25% + ${filmTitleHeight});
  }
`

export const Film = styled.div`
  ${cover()};
  ${mixins.flex};

  background-color: black;
  background-image: url('images/thumbs/${props => props.image}.png');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.3rem;
  box-shadow: 0 0.8rem 1rem -0.5rem black;
  cursor: pointer;
  transition: 0.2s;

  ${FilmTile}:hover & {
    bottom: ${filmTitleHeight};
  }

  ${media.mobile} {
    bottom: ${filmTitleHeight};
  }
`

export const FilmText = styled.div`
  ${ellipsis()};

  bottom: 0;
  padding: 0.2rem 0.7rem;
  position: absolute;
`

export const FilmTitle = styled.span`
  font-style: italic;
  margin-right: 0.2rem;
`

const wreathSize = '5rem'

export const Wreath = styled.div`
  background-image: url('images/full-wreath.png');
  background-position: center 90%;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${wreathSize};
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: ${wreathSize};
`
