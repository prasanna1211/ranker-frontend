/* global localStorage */
import { takeEvery, put, call, select } from 'redux-saga/effects';

function* postAndFetch(action) {

}

export default function* postAndFetchInsulinDose() {
  yield takeEvery('POST_AND_FETCH_DASHBOARD_INSULINDOSES', postAndFetch);
}
