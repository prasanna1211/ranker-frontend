import { fork } from 'redux-saga/effects';

/* global localStorage */
import { takeEvery, put, call, select } from 'redux-saga/effects';

function* postAndFetch(action) {

}

function* postAndFetchInsulinDose() {
  yield takeEvery('POST_AND_FETCH_DASHBOARD_INSULINDOSES', postAndFetch);
}

export default function* rootSaga() {
  yield fork(postAndFetchInsulinDose);
}
