import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import classnames from 'classnames'
import {
  NavSearchWrapper,
  NavSearchInput,
  NavSearchBtn,
  
  SearchResultBox,
  HotSearch,
  HotSearchTitle,
  HotSearchSwitch,
  HotSearchList,
  HotSearchListItem,

  HistorySearchList,
  HistoryListItem,
} from './style'


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusNavSearch: false,
      isHoverSearchResult: false
    }
    this.handleSearchFocus = this.handleSearchFocus.bind(this);
    this.handleSearchBlur = this.handleSearchBlur.bind(this);
    this.handleSearchResEnter = this.handleSearchResEnter.bind(this);
    this.handleSearchResLeave = this.handleSearchResLeave.bind(this);
  }
  handleSearchFocus() {
    this.setState({
      isFocusNavSearch: true
    });
  }
  handleSearchBlur() {
    this.setState({
      isFocusNavSearch: false
    })
  }
  handleSearchResEnter() {
    this.setState({
      isHoverSearchResult: true
    })
  }
  handleSearchResLeave() {
    this.setState({
      isHoverSearchResult: false
    })
  }
  sendSearchKeyWord = () => {
    console.log("sendSearchKeyWord");
  }
  isShowSearchResultBox() {
    if ( !this.state.isFocusNavSearch && !this.state.isHoverSearchResult ) return null;
    return (
      <SearchResultBox
        onMouseEnter={this.handleSearchResEnter}
        onMouseLeave={this.handleSearchResLeave}
      >
        <HotSearch>
          <HotSearchTitle>
            <span>热门搜索</span>
            <HotSearchSwitch className="icon-shuaxin iconfont">换一批</HotSearchSwitch>
          </HotSearchTitle>
          <HotSearchList>
            <HotSearchListItem>理财</HotSearchListItem>
            <HotSearchListItem>理财</HotSearchListItem>
            <HotSearchListItem>理财</HotSearchListItem>
            <HotSearchListItem>简书交友</HotSearchListItem>
            <HotSearchListItem>理财</HotSearchListItem>
            <HotSearchListItem>理财</HotSearchListItem>
          </HotSearchList>
        </HotSearch>

        <HistorySearchList>
          <HistoryListItem >
            <i className="iconfont">&#xe60e;</i>
            <span>一条历史记录</span>
            <i className="iconfont del-history-btn">&#xe62c;</i>
          </HistoryListItem>
          <HistoryListItem >
            <i className="iconfont">&#xe60e;</i>
            <span>一条历史记录</span>
            <i className="iconfont del-history-btn">&#xe62c;</i>
          </HistoryListItem>
        </HistorySearchList>
      </SearchResultBox>
    )
  }
  render () {
    return (
      <NavSearchWrapper>
        <CSSTransition
          in={this.state.isFocusNavSearch}
          timeout={400}
          classNames="slide"
        >
          <NavSearchInput
            onFocus={this.handleSearchFocus}
            onBlur={this.handleSearchBlur}
            type="text" placeholder="搜索"
          />
        </CSSTransition>
        <NavSearchBtn 
          className={
            classnames(
              'iconfont icon-fangdajing',
              {'active': this.state.isFocusNavSearch}
            ) 
          }
          onClick={this.sendSearchKeyWord}
        />
        {this.isShowSearchResultBox()}
      </NavSearchWrapper>
    )
  }
}
export default Nav;
