import { cover, ellipsis } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins } from 'style'

export const FilmsSection = styled.section`
  align-content: flex-start;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.tileMin}, 1fr)
  );
`

export const FilmTile = styled(Link)`
  padding-bottom: 56.25%;
  position: relative;
`

export const Film = styled.div`
  ${cover()};
  ${mixins.flex};

  background-color: black;
  background-image: url('images/thumbs/${props => props.image}.png');
  background-position: bottom;
  background-size: cover;
  border-radius: 0.3rem;
  box-shadow: 0 0.8rem 1rem -0.5rem black;
  cursor: pointer;
  transition: 0.2s;

  ${FilmTile}:hover & {
    bottom: 2.5rem;
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
