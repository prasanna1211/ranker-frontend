import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import reduce from 'lodash/reduce';

import companyRankDataReducer from '../../../CompanyRankDisplay/reducers/companyDataReducer';
import createReducer from '../../../../helpers/createReducer';

const commonDataInitialState = Map({
  isFetched: false,
});

const onHtInitialFetch = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['isFetched'], false);
  return newState;
};

const onHtInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['domainData'], fromJS(payload.allDomains));
  newState = newState.setIn(['isFetched'], true);
  return newState;
};

const commonDataReducer = createReducer(commonDataInitialState, {
  COMMON_INITIAL_FETCH: onHtInitialFetch,
  COMMON_INITIAL_FETCH_SUCCESS: onHtInitialFetchSuccess,
});

export default combineReducers({
  commonData: commonDataReducer,
  companyData: companyRankDataReducer,
});
