/* global localStorage */
import { take, takeEvery, put, call, select } from 'redux-saga/effects';
import request from 'axios';

import { getRanks } from '../api';

const getConfigForGet = (url) => ({
  method: 'GET',
  url,
});

function* fetch(action) {
  try {

    const apiData = yield call(request, getConfigForGet(getRanks(action.payload)));
    console.log(apiData)
    const {
      data: {
        result: companyRankData,
      }
    } = apiData;

    yield put({
      type: 'COMPANY_FETCH_RANKS_SUCCESS',
      payload: {
        companyRankData,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield takeEvery('COMPANY_FETCH_RANKS', fetch);
}
