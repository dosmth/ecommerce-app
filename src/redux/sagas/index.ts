import { all } from "redux-saga/effects";
import { categoriesSaga } from "./categories";
import { usersSaga } from "./users";
import { productsSaga } from "./products";

export default function* rootSaga() {
  yield all([...categoriesSaga, ...usersSaga, ...productsSaga]);
}
