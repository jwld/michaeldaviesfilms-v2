import styled from 'styled-components'

import { components, media, mixins } from 'style'

export const BiographyPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 4rem;

  ${media.m700} {
    grid-gap: 2rem;
  }
`

export const MobileTitle = styled.span`
  ${mixins.flex};

  display: none;
  font-size: 1.8rem;
  font-weight: bold;
  padding-top: 2rem;
  text-transform: uppercase;
  width: 100%;

  ${media.mobile} {
    display: flex;
  }
`

export const GridAboutWrap = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: auto;
`

export const TextWrap = styled(components.TextWrap)`
  max-width: 55rem;
`

export const CreditsList = styled.p``
