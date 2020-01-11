import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  align-items: center;
  display: flex;
`

const linkHorizPadding = '1.5rem'

export const linkStyle = css`
  padding: 1.2rem ${linkHorizPadding};
`

export const LeftLink = styled(NavLink)`
  ${linkStyle};

  margin-right: auto;
`

export const RightLink = styled(NavLink)`
  ${linkStyle};

  position: relative;

  :hover,
  &.active {
    ::after {
      background: white;
      border-radius: 0.1rem;
      bottom: 0.7rem;
      content: '';
      display: inline-block;
      height: 0.2rem;
      left: ${linkHorizPadding};
      position: absolute;
      width: calc(100% - ${linkHorizPadding} * 2);
    }
  }
`

export const ContactLink = styled.a`
  ${linkStyle};
`
