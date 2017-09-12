/* global localStorage */
import { take, takeEvery, put, call, select } from 'redux-saga/effects';
import request from 'axios';
import { getDomains } from '../api';

const commonDataIsFetchedSelector = state => state.getIn(['apiData', 'commonData', 'isFetched']);

const getConfigForGet = (url) => ({
  method: 'GET',
  url,
});

function* fetch(action) {
  try {
    const commonDataNotYetFetched = yield select(commonDataIsFetchedSelector);

    if (!commonDataNotYetFetched) {
      yield put({
        type: 'COMMON_INITIAL_FETCH',
      });
      yield take('COMMON_INITIAL_FETCH_SUCCESS');
    }

    yield put({
      type: 'COMPANY_INITIAL_FETCH_SUCCESS',
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* postAndFetchInsulinDose() {
  yield takeEvery('COMPANY_INITIAL_FETCH', fetch);
}
