/* global localStorage */
import { take, takeEvery, put, call, select } from 'redux-saga/effects';
import request from 'axios';

const getConfigForGet = (url) => ({
  method: 'GET',
  url,
});

function* fetch(action) {
  try {
    yield put({
      type: 'COMPANY_FETCH_RANK_SUCCESS',
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield takeEvery('COMPANY_FETCH_RANK', fetch);
}
