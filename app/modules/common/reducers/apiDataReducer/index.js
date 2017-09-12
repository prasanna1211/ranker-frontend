import { Map, List, fromJS } from 'immutable';
import reduce from 'lodash/reduce';
import createReducer from '../../../../helpers/createReducer';

const initialState = Map({
  commonData: Map({
    isFetched: false,
  }),
  insulinDosesData: Map(),
});

const onHtInitialFetch = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['commonData', 'isFetched'], false);
  return newState;
};

const onHtInitialFetchSuccess = (state, { payload }) => {
  let newState = state;
  newState = newState.setIn(['commonData', 'domainData'], fromJS(payload.allDomains));
  newState = newState.setIn(['commonData', 'isFetched'], true);
  return newState;
};

export default createReducer(initialState, {
  COMMON_INITIAL_FETCH: onHtInitialFetch,
  COMMON_INITIAL_FETCH_SUCCESS: onHtInitialFetchSuccess,
});
