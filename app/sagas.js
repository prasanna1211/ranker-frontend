import { fork } from 'redux-saga/effects';

import companyInitialFetchSaga from './sagas/companyInitialFetch';
import commonDataFetch from './sagas/commonDataFetch.js';

export default function* rootSaga() {
  yield fork(companyInitialFetchSaga);
  yield fork(commonDataFetch);
}
