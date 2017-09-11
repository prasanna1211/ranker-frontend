import { fork } from 'redux-saga/effects';

import companyInitialFetchSaga from './sagas/companyInitialFetch';

export default function* rootSaga() {
  yield fork(companyInitialFetchSaga);
}
