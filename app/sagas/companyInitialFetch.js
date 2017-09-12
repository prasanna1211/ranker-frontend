/* global localStorage */
import { takeEvery, put, call, select } from 'redux-saga/effects';
import request from 'axios';
import { getDomains } from '../api';

const getConfigForGet = (url) => ({
  method: 'GET',
  url,
});

function* fetch(action) {
  try {
    const domainData = yield call(request, getConfigForGet(getDomains()));
    const { data: allDomains } = domainData;
    yield put({
      type: 'COMPANY_INITIAL_FETCH_SUCCESS',
      payload: {
        allDomains,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* postAndFetchInsulinDose() {
  yield takeEvery('COMPANY_INITIAL_FETCH', fetch);
}
