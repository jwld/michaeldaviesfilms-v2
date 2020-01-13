import styled from 'styled-components'

import { components } from 'style'

export const BiographyPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
`

export const GridAboutWrap = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 29rem;
`

export const TextWrap = components.TextWrap

export const CreditsWrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: 60rem;
`

export const CreditsHeader = styled.span`
  font-weight: 400;
`

export const CreditsList = styled.div`
  display: grid;
  grid-gap: 0.4rem;
`

export const Credit = styled.span``

export const CreditFilm = styled.span`
  font-style: italic;
`

export const CreditChannel = styled.span`
  margin-left: 1rem;
`
