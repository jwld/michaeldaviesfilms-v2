import React from 'react'

import ROUTES from 'constants/routes'

import * as SC from './style'

const NavBar = () => (
  <SC.NavBar>
    <SC.LeftLink exact to={ROUTES.LANDING}>
      Michael Davies
    </SC.LeftLink>

    <SC.RightLink exact to={ROUTES.LANDING}>
      Now
    </SC.RightLink>

    <SC.RightLink to={ROUTES.BIOGRAPHY}>Biography</SC.RightLink>

    <SC.ContactLink href="mailto:info@michaeldaviesfilms.com">
      Contact
    </SC.ContactLink>
  </SC.NavBar>
)

export default NavBar
