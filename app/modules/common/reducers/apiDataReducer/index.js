import { Map, List, fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import reduce from 'lodash/reduce';

import companyRankDataReducer from '../../../CompanyRankDisplay/reducers/companyDataReducer';
import createReducer from '../../../../helpers/createReducer';

const commonDataInitialState = fromJS({
  domainData: {}
});

const onHtInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['domainData'], fromJS(payload.allDomains));
  return newState;
};

const commonDataReducer = createReducer(commonDataInitialState, {
  COMMON_INITIAL_FETCH_SUCCESS: onHtInitialFetchSuccess,
});

export default combineReducers({
  commonData: commonDataReducer,
  companyData: companyRankDataReducer,
});
