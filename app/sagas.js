import { fork } from 'redux-saga/effects';

import companyInitialFetchSaga from './sagas/companyInitialFetch';
import commonDataFetch from './sagas/commonDataFetch.js';
import fetchRanks from './sagas/fetchRanks.js';

export default function* rootSaga() {
  yield fork(companyInitialFetchSaga);
  yield fork(commonDataFetch);
  yield fork(fetchRanks);
}
