import React from 'react'

import ROUTES from 'constants/routes'

import * as SC from './style'

const NavBar = () => (
  <SC.NavBar>
    <SC.RightLink exact to={ROUTES.LANDING}>
      Now
    </SC.RightLink>

    <SC.RightLink to={ROUTES.BIOGRAPHY}>Biography</SC.RightLink>

    <SC.ContactLink href="mailto:info@michaeldaviesfilms.com?subject=Hello!">
      Contact
    </SC.ContactLink>
  </SC.NavBar>
)

export default NavBar
