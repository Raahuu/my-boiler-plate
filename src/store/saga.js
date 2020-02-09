import { all } from "redux-saga/effects";

import test from "./test/saga";

export default function* rootSaga() {
  yield all([test()]); //yield all([test(), test1(), test2()]);
}
