/* global localStorage */
import { takeEvery, put, call, select } from 'redux-saga/effects';

function* fetch(action) {
  
}

export default function* postAndFetchInsulinDose() {
  yield takeEvery('COMPANY_INITIAL_FETCH', fetch);
}
