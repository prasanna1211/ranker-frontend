import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import reduce from 'lodash/reduce';

import companyRankDataReducer from '../../../CompanyRankDisplay/reducers/companyDataReducer';
import createReducer from '../../../../helpers/createReducer';

const commonFetchStatus = {
  isFetching: false,
  isFetched: false,
};

const commonDataInitialState = fromJS({
  commonDataStatus: commonFetchStatus,
  companyDataStatus: commonFetchStatus,
});

const onCommonInitialFetch = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['commonDataStatus', 'isFetching'], true);
  newState = newState.setIn(['commonDataStatus', 'isFetched'], false);
  return newState;
};

const onCommonInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['commonDataStatus', 'isFetching'], false);
  newState = newState.setIn(['commonDataStatus', 'isFetched'], true);
  return newState;
};

const onCompanyInitialFetch = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['companyDataStatus', 'isFetching'], true);
  newState = newState.setIn(['companyDataStatus', 'isFetched'], false);
  return newState;
};

const onCompanyInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['companyDataStatus', 'isFetching'], false);
  newState = newState.setIn(['companyDataStatus', 'isFetched'], true);
  return newState;
};

export default createReducer(commonDataInitialState, {
  COMMON_INITIAL_FETCH: onCommonInitialFetch,
  COMMON_INITIAL_FETCH_SUCCESS: onCommonInitialFetchSuccess,
  COMPANY_FETCH_RANKS: onCompanyInitialFetch,
  COMPANY_FETCH_RANKS_SUCCESS: onCompanyInitialFetchSuccess,
});
