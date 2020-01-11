import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavBar = styled.nav`
  align-items: center;
  display: flex;
`

export const linkStyle = css`
  padding: 1.2rem 1.5rem;
`

export const LeftLink = styled(NavLink)`
  ${linkStyle};

  margin-right: auto;
`

export const RightLink = styled(NavLink)`
  ${linkStyle};

  &.active {
    background: pink;
  }
`

export const ContactLink = styled.a`
  ${linkStyle};
`
