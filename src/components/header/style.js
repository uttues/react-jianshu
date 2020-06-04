import styled from 'styled-components';
import LogoPic from '../../statics/nav-logo.png'
import NavVipLogo from '../../statics/nav-vip-logo.png'

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
`

export const WidthLimit = styled.div`
  width: 1440px;
  margin: 0 auto;
  position: relative;
`

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background-image: url(${LogoPic});
  background-size: contain;
`

export const HeaderRightButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 55px;
  display: flex;
  align-items: center;
`

export const Button = styled.a`
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  margin-right: 15px;
  font-size: 15px;
  
  &.signout {
    width: 80px;
    border: 1px solid;
    color: #e79685;
    background-color: #fff;
    
    :hover {
      background-color: #fdf7f6;
    }
  }
  &.write {
    width: 100px;
    color: #fff;
    background-color: #dc7661;

    :hover {
      background-color: #dc6a52;
    }

    &.icon-Pensyumaobi:before {
      display: inline-block;
      font-size: 18px;
      margin-right: 2px;
      vertical-align: middle;
    }
  }
`

export const NavMainWrapper = styled.div`
  width: 960px;
  height: 55px;
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
    display: inline-block;
    margin-right: 5px;
    font-size: 22px;
    line-height: 55px;
    vertical-align: middle;
  }
`
//active-color: #EA6F5A

export const NavSearchWrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const NavSearch = styled.input.attrs({
  type: 'text',
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 240px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #eee;
  border-radius: 19px;
  padding: 0 40px 0 20px;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
  background: #eee;

  &::placeholder {
    color: #999;
  }

  &.slide-enter {
    width: 240px;
  }
  &.slide-enter-active {
    width: 320px;
    transition: all .4s ease;
  }
  &.slide-enter-done {
    width: 320px;
  }
  &.slide-exit {
    width: 320px;
  }
  &.slide-exit-active {
    width: 240px;
    transition: all .4s ease;
  }
  &.slide-exit-done {
    width: 240px;
  }
`

export const NavSearchBtn = styled.a`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #999;
  cursor: pointer;

  &:before {
    display: inline-block;
    font-size: 17px;
    margin: auto;
  }

  &.active {
    background-color: #969696;
    color: #fff;
  }
`

export const SearchResultBox = styled.div`
  width: 250px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
  position: absolute;
  top: 47px;
  left: 10px;

  &:before {
    content: '';
    display: inline-block;
    border: 10px solid #fff;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    transform: rotate(45deg);
    position: absolute;
    top: -8px;
    left: 25px;
  }
`

export const HotSearch = styled.div`
  padding: 20px;
  padding-bottom: 10px;
  color: #adadad;
  border-bottom: 1px solid #e2e2e2;
`

export const HotSearchTitle = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HotSearchSwitch = styled.a`
  font-size: 13px !important;
  cursor: pointer;
  &:before {
    margin-right: 2px;
  }
`

export const HotSearchList = styled.div`
  padding-top: 12px;
`

export const HotSearchListItem = styled.a`
  display: inline-block;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  font-size: 13px;
  color: #999;
  padding: 2px 6px;
  margin: 0 9px 9px 0; 
  cursor: pointer;
`

export const HistorySearchList = styled.div`
  padding: 3px 4px;
`

export const HistoryListItem = styled.a`
  display: block;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  padding-left: 16px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  span{
    vertical-align: middle;
    display: inline-block;
    width: 150px;
    padding-left: 8px;
    color: #333;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    -o-text-overflow: ellipsis;
  }

  i {
    vertical-align: middle;
    font-size: 20px;
    color: #a0a0a0;

    &.del-history-btn {
      font-size: 10px;
      line-height: 10px;
      position: absolute;
      top: 13px;
      right: 16px;
      cursor: pointer;
      opacity: 0;
    }
  }

  &:hover {
    background: #f0f0f0;
    
    i.del-history-btn {
      opacity: 1;
    }
  }



`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  color: #969696;
`

export const NavRightItem = styled.a`
  line-height: 55px;
  margin: 0 10px;
  cursor: pointer;

  &.icon-font:before {
    padding: 0 5px;
    display: inline-block;
    line-height: 55px;
    font-size: 26px;
    vertical-align: middle;
  }
  &.nav-vip-logo {
    display: inline-block;
    width: 57px;
    height: 25px;
    background-image: url(${NavVipLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position:center;
  }
`
