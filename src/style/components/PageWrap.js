import styled from 'styled-components'

import * as media from '../media'
import * as vars from '../variables'

const PageWrap = styled.div`
  padding: 2.5rem;

  ${media.mobile} {
    padding: 1rem;
    padding-bottom: calc(1rem + ${vars.navBarHeight});
  }
`

export default PageWrap
