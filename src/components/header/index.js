import React, { Component } from 'react'
import { connect } from 'react-redux'

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


const mapStateToProps = (state) => {
  return {
    searchList: state.searchList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
