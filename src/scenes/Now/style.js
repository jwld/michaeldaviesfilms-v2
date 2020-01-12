import { cover } from 'polished'
import styled from 'styled-components'

import { components, mixins } from 'style'

export const NowPage = styled(components.PageWrap)``

export const FilmsWrap = styled.section`
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

  background: pink;
  background-image: url('images/${props => props.image}.png');
  background-position: center;
  background-size: cover;
  border-radius: 0.3rem;
  box-shadow: 0 0.8rem 1rem -0.5rem black;
  cursor: pointer;
`
