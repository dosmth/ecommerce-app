import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { api_get_all, api_get_one } from "../../api/users.js";

function* getUsers() {
  try {
    const users = yield call(api_get_all);
    yield put({ type: "USERS_FETCHED", payload: users });
  } catch (e) {
    yield put({ type: "USERS_ERRORED", payload: e.message });
  }
}

function* getUser(action) {
  try {
    const user = yield call(api_get_one, action.payload.id);
    yield put({ type: "USER_FETCHED", payload: user });
  } catch (e) {
    yield put({ type: "USER_ERRORED", payload: e.message });
  }
}

export const usersSaga = [
  takeEvery("GET_USERS", getUsers),
  takeEvery("GET_USER", getUser),
];
