import { all, fork } from 'redux-saga/effects';

export default function* rootReducer() {
  yield all([fork(userSaga)]);
}
