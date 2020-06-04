import {
  ADD_HISTORY_SEARCH_ITEM,
  // DELETE_HISTORY_SEARCH_ITEM
} from './actionTypes'
import {
  HISTORY_SEARCH_LIST_MAX_LENGTH
} from '../common/constant'


const defaultState = {
  hotSearchList: [1, 2, 3 ],
  historySearchList: ['1', '2', '23'],
}
// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
  const value = action.value;
  const newState = JSON.parse(JSON.stringify(state));
  
  switch (action.type) {
    case ADD_HISTORY_SEARCH_ITEM:
      const index = newState.historySearchList.indexOf(value);
      // 1.无需操作的情况【重复在第0项】
      if ( index === 0 ) return newState;
      // 2.先删除后增加【删除重复项/最后一项】
      if ( index !== -1 ){
        newState.historySearchList.splice(index, 1);
      } else if ( newState.historySearchList.length === HISTORY_SEARCH_LIST_MAX_LENGTH ) {
        newState.historySearchList.splice(HISTORY_SEARCH_LIST_MAX_LENGTH - 1);
      }
      // 3.不论是否需要删除都会添加~
      newState.historySearchList = [ value, ...newState.historySearchList ];
      return newState;
    default: 
      return state;
  }
}
