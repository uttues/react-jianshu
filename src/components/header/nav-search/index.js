import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actionCreators'
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


class NavSearch extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isFocusNavSearch: false,
      isHoverSearchResult: false,
      inputValue: '',
    }
  }
  handleSearchFocus = () => this.setState({isFocusNavSearch: true})
  handleSearchBlur = () => this.setState({isFocusNavSearch: false})
  handleSearchResEnter = () => this.setState({isHoverSearchResult: true})
  handleSearchResLeave = () => this.setState({isHoverSearchResult: false})
  handleSearchInputChange = e => this.setState({inputValue: e.nativeEvent.target.value})
  handleSearchInputKeyUp = e => {
    if (e.key !== undefined) {
      if (e.key === 'Enter'){
        this.sendSearchKeyWord();
      }
    } else if (e.keyIdentifier !== undefined) {
      if (e.key === 'Enter'){
        this.sendSearchKeyWord();
      }
    } else if (e.keyCode !== undefined) {
      if (e.key === 'Enter'){
        this.sendSearchKeyWord();
      }
    }
  }
  sendSearchKeyWord = () => {
    // 1.异步请求
    // 2.将字段存入历史记录中
    this.props.addHistorySearchItemHandler(this.state.inputValue.trim());
  }
  isShowHistoryList () {
    if (this.props.historySearchList.length > 0) {
      return (
        <HistorySearchList>
          {
            this.props.historySearchList.map((item, index) => {
              return (
                <HistoryListItem key={index}>
                  <i className="iconfont">&#xe60e;</i>
                  <span>{item}</span>
                  <i 
                    className="iconfont del-history-btn" 
                    onClick={index=>{this.props.deleteHistorySearchItemHandler(index)}}>
                    &#xe62c;
                  </i>
                </HistoryListItem>
              )
            })
          }
        </HistorySearchList>
      )
    }
  }
  isShowSearchResultBox () {
    if ( !this.state.isFocusNavSearch && !this.state.isHoverSearchResult ) {
      return null;
    }
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
            {
              this.props.hotSearchList.map((item, index) => {
                return <HotSearchListItem key={index}>{item}</HotSearchListItem>
              })
            }
          </HotSearchList>
        </HotSearch>
        {this.isShowHistoryList()}
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
            onKeyUp={this.handleSearchInputKeyUp}
            onChange={this.handleSearchInputChange}
            onFocus={this.handleSearchFocus}
            onBlur={this.handleSearchBlur}
            ref={this.inputRef}
            type="text"
            placeholder="搜索"
            maxLength="14"
          />
        </CSSTransition>
        <NavSearchBtn 
          onMouseDown={this.sendSearchKeyWord}
          className={
            classnames(
              'iconfont icon-fangdajing',
              {'active': this.state.isFocusNavSearch}
            ) 
          }
        />
        {this.isShowSearchResultBox()}
      </NavSearchWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    hotSearchList: state.hotSearchList,
    historySearchList: state.historySearchList,
  }
}
const mapDispatchToProps =  (dispatch) => {
  return {
    addHistorySearchItemHandler (inputValue) {
      const action = actionCreators.addHistorySearchItem(inputValue);
      dispatch(action);
    },
    deleteHistorySearchItemHandler (index) {
      dispatch(actionCreators.deleteHistorySearchItem(index));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
