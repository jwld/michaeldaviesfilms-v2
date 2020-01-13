import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { media } from 'style'

export const NavBar = styled.nav`
  align-items: center;
  display: flex;
  padding: 1rem;

  ${media.mobile} {
    background: #2a2f37;
    bottom: 0;
    justify-content: center;
    padding: 0.5rem;
    position: fixed;
    width: 100vw;
    z-index: 1;
  }
`

const linkHorizPadding = '1.5rem'

export const linkStyle = css`
  padding: 1.2rem ${linkHorizPadding};
`

export const LeftLink = styled(NavLink)`
  ${linkStyle};

  font-weight: 400;
  margin-right: auto;
  text-transform: uppercase;

  ${media.mobile} {
    display: none;
  }
`

export const linkHoverStyle = css`
  ${linkStyle};

  position: relative;

  ::after {
    background: white;
    border-radius: 0.1rem;
    bottom: 0.9rem;
    content: '';
    display: inline-block;
    height: 0.1rem;
    left: ${linkHorizPadding};
    position: absolute;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
    width: calc(100% - ${linkHorizPadding} * 2);
  }

  &.active {
    ::after {
      transform: scale(1);
    }
  }
`

export const RightLink = styled(NavLink)`
  ${linkHoverStyle};
`

export const ContactLink = styled.a`
  ${linkHoverStyle};
`
