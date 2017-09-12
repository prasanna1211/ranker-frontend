import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux';

import reduce from 'lodash/reduce';

import createReducer from '../../../helpers/createReducer';

const commonDataInitialState = Map({
});

const onHtInitialFetchSuccess = (state, { payload }) => {
  return state
    .setIn(['companyRanksData'], fromJS(payload.companyRankData))
    .setIn(['gapBetweenRecords'], fromJS(payload.gapBetweenRecords))
    .setIn(['numberOfRecords'], fromJS(payload.numberOfRecords))
    .setIn(['startDate'], payload.startDate);
};

export default createReducer(commonDataInitialState, {
  COMPANY_FETCH_RANKS_SUCCESS: onHtInitialFetchSuccess,
});
