import { takeLatest, call, put } from "redux-saga/effects";

import { testAPI } from "./API";

function* test(action) {
  try {
    const response = yield call(testAPI, action.payload);
    yield put({ type: "TEST_SUCCESS", payload: response });
  } catch (err) {
    throw err;
  }
}

export default function* defaultSaga() {
  yield takeLatest("TEST", test);
}
