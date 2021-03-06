import styled from 'styled-components';

export const NavSearchWrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const NavSearchInput = styled.input`
  box-sizing: border-box;
  width: 240px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #eee;
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
  z-index: 3000;

  &:before {
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
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, .2));
  background: #fff;
  position: absolute;
  top: 47px;
  left: 10px;

  &:before {
    content: '';
    display: inline-block;
    border-radius: 2px;
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
  padding: 20px 20px 10px;
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

  span {
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

  i.iconfont {
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
