import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
// import store from '../../store'
import classnames from 'classnames'
import {
  HeaderWrapper,
  WidthLimit,
  Logo,
  HeaderRightButtons,
  Button,
  NavMainWrapper,
  NavLeftItem,
  NavSearchWrapper,
  NavSearch,
  NavSearchBtn,
  SearchResultBox,
  HotSearch,
  HotSearchTitle,
  HotSearchSwitch,
  HotSearchList,
  HotSearchListItem,
  HistorySearchList,
  HistoryListItem,
  NavRight,
  NavRightItem
} from './style'

class Header extends Component {
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
          {this.props.searchList.map(item => (
            <HistoryListItem >
              <i className="iconfont">&#xe60e;</i>
              <span>遍历出来的数据{item}</span>
              <i className="iconfont del-history-btn">&#xe62c;</i>
            </HistoryListItem>
          ))}
        </HistorySearchList>
      </SearchResultBox>
    )
  }
  render() {
    return (
      <HeaderWrapper>
        <WidthLimit>
          <Logo href="/" />

          <HeaderRightButtons>
            <Button className="signout" href="/">注册</Button>
            <Button className="write iconfont icon-Pensyumaobi" href="/">写文章</Button>
          </HeaderRightButtons>

          <NavMainWrapper>
            <div>
              <NavLeftItem className="iconfont icon-zhinanzhen">首页</NavLeftItem>
              <NavLeftItem className="iconfont icon-shoujixiazai">下载App</NavLeftItem>

              <NavSearchWrapper>
                <CSSTransition
                  in={this.state.isFocusNavSearch}
                  timeout={400}
                  classNames="slide"
                >
                  <NavSearch 
                    onFocus={this.handleSearchFocus}
                    onBlur={this.handleSearchBlur}
                    type="text" placeholder="搜索"
                  />
                </CSSTransition>
                <NavSearchBtn className={classnames('iconfont icon-fangdajing', {'active': this.state.isFocusNavSearch}) } />
                {this.isShowSearchResultBox()}
              </NavSearchWrapper>
            </div>
            <NavRight>
              <NavRightItem className="iconfont icon-font" />
              <NavRightItem className="nav-vip-logo" />
              <NavRightItem className="nav-login-status">登录</NavRightItem>
            </NavRight>
          </NavMainWrapper>

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
