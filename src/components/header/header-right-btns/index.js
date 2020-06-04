import React, { Component } from 'react'

import {
  HeaderRightButtons,
  Button,
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderRightButtons>
        <Button className="signout" href="/">注册</Button>
        <Button className="write iconfont icon-Pensyumaobi" href="/">写文章</Button>
      </HeaderRightButtons>
    )
  }
}

export default Header;
