import React, { Component } from 'react'

import Nav from './nav'
import HeaderRightButtons from './header-right-btns'

import {
  HeaderWrapper,
  WidthLimit,
  Logo,
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Logo href="/" />
          <Nav />
          <HeaderRightButtons />
        </WidthLimit>
      </HeaderWrapper>
    )
  }
}

export default Header;
