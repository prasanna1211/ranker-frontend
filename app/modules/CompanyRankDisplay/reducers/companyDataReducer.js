import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux';

import reduce from 'lodash/reduce';

import createReducer from '../../../helpers/createReducer';

const commonDataInitialState = Map({
});

const onHtInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['companyRanksData'], fromJS(payload.companyRankData));
  newState = newState.setIn(['isFetched'], true);
  return newState;
};

export default createReducer(commonDataInitialState, {
  COMPANY_FETCH_RANKS_SUCCESS: onHtInitialFetchSuccess,
});
