import styled from 'styled-components';
import NavVipLogo from '../../../statics/nav-vip-logo.png'

export const NavMainWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const NavLeftItem = styled.a`
  display: inline-block;
  font-size: 17px;
  line-height: 55px;
  padding: 0 20px;
  color: #333;
  cursor: pointer;

  &:before {
    margin-right: 5px;
    font-size: 22px;
    vertical-align: middle;
  }
`
//active-color: #EA6F5A

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
`

export const NavRightItem = styled.a`
  line-height: 55px;
  color: #969696;
  margin: 0 10px;
  cursor: pointer;

  &.icon-font:before {
    padding: 0 5px;
    font-size: 26px;
    vertical-align: middle;
  }
  &.nav-vip-logo {
    width: 57px;
    height: 25px;
    background-image: url(${NavVipLogo});
    background-size: contain;
  }
`
