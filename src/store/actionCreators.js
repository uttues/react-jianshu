import * as constants from './actionTypes';

export const addHistorySearchItem = value => ({
  type: constants.ADD_HISTORY_SEARCH_ITEM,
  value
}) 
export const deleteHistorySearchItem = value => ({
  type: constants.DELETE_HISTORY_SEARCH_ITEM,
  value
}) 
