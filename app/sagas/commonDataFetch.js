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

    const domainData = yield call(request, getConfigForGet(getDomains()));
    const { data: allDomains } = domainData;
    yield put({
      type: 'COMMON_INITIAL_FETCH_SUCCESS',
      payload: {
        allDomains,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* postAndFetchInsulinDose() {
  yield takeEvery('COMMON_INITIAL_FETCH', fetch);
}
