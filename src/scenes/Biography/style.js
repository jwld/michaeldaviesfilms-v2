import styled from 'styled-components'

import { components, media } from 'style'

export const BiographyPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
`

export const GridAboutWrap = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 29rem;

  ${media.tablet} {
    grid-template-columns: auto;
  }
`

export const TextWrap = styled(components.TextWrap)`
  ${media.tablet} {
    grid-row: 1;
  }
`

export const CreditsWrap = styled.div`
  display: grid;
  grid-gap: 0.4rem;
`

export const CreditsHeader = styled.span`
  font-weight: 400;
`

export const CreditsList = styled.p``
