/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import apiDataReducer from './modules/common/reducers/apiDataReducer/index.js';
import fetchStatusReducer from './modules/common/reducers/fetchStatusReducer/index.js';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    apiData: apiDataReducer,
    fetchStatus: fetchStatusReducer,
  });
}
