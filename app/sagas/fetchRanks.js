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

    const {
      payload: {
        numberOfRecords,
        gapBetweenRecords,
        startDate,
      }
    } = action;
    const apiData = yield call(request, getConfigForGet(getRanks(action.payload)));
    const {
      data: {
        result: companyRankData,
      }
    } = apiData;
    yield put({
      type: 'COMPANY_FETCH_RANKS_SUCCESS',
      payload: {
        companyRankData,
        numberOfRecords,
        gapBetweenRecords,
        startDate,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield takeEvery('COMPANY_FETCH_RANKS', fetch);
}
