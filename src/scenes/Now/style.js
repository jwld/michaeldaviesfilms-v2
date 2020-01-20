import styled from 'styled-components'

import { components, media, mixins } from 'style'

export const NowPage = styled(components.PageWrap)`
  display: grid;
  grid-gap: 6rem;

  ${media.m700} {
    grid-gap: 2rem;
  }
`

export const AboutSection = styled.section`
  align-content: center;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: auto auto;

  ${media.m700} {
    grid-gap: 1.5rem;
    grid-template-columns: auto;
  }
`

export const PortraitTitleWrap = styled.div`
  ${mixins.flexVertical};

  align-items: flex-end;
  margin-left: auto;

  ${media.m700} {
    align-items: center;
    margin-left: 0;
    margin-top: 2rem;
  }
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

  font-size: 2rem;
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export const JobTitle = styled.span`
  ${mixins.flex};

  font-size: 1.7rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: center;
  width: 100%;
`

export const TextWrap = styled(components.TextWrap)`
  margin-right: auto;
  max-width: 54rem;

  ${media.m700} {
    margin: 0;
    max-width: none;
  }
`
