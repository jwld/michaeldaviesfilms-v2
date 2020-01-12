import styled from 'styled-components'

import { components, mixins } from 'style'

export const NowPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 40rem 1fr;
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

const portraitSize = '25rem'

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

export const TextWrap = components.TextWrap
