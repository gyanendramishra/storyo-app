import { all } from "redux-saga/effects";
import { securitySaga } from "./sagas/SecuritySaga";

export default function* rootSaga() {
  yield all([securitySaga()]);
}
