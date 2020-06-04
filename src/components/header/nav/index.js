import React, { Component } from 'react'
import NavSearch from '../nav-search'
import {
  NavMainWrapper,
  NavLeftItem,

  NavRight,
  NavRightItem,
} from './style'


class Nav extends Component {
  render () {
    return (
      <NavMainWrapper>
        <div>
          <NavLeftItem className="iconfont icon-zhinanzhen">首页</NavLeftItem>
          <NavLeftItem className="iconfont icon-shoujixiazai">下载App</NavLeftItem>
          <NavSearch />
        </div>
        <NavRight>
          <NavRightItem className="iconfont icon-font" />
          <NavRightItem className="nav-vip-logo" />
          <NavRightItem className="nav-login-status">登录</NavRightItem>
        </NavRight>
      </NavMainWrapper>
    )
  }
}
export default Nav;
