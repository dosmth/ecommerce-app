import { AnyAction } from "redux"; // for TS
import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  api_get_all,
  api_get_one,
  api_get_one_by_url,
} from "../../api/categories";

function* getCategories(): Generator {
  try {
    const categories = yield call(api_get_all);
    yield put({ type: "CATEGORIES_FETCHED", payload: categories });
  } catch (e) {
    yield put({ type: "CATEGORIES_ERRORED", payload: e.message });
  }
}

function* getCategory(action: AnyAction): Generator {
  try {
    const category = yield call(api_get_one, action.payload.id);
    yield put({ type: "CATEGORY_FETCHED", payload: category });
  } catch (e) {
    yield put({ type: "CATEGORY_ERRORED", payload: e.message });
  }
}

function* getCategoryByUrl(action: AnyAction): Generator {
  try {
    const category = yield call(api_get_one_by_url, action.payload.url);
    yield put({ type: "CATEGORY_FETCHED", payload: category });
  } catch (e) {
    yield put({ type: "CATEGORY_ERRORED", payload: e.message });
  }
}

export const categoriesSaga = [
  takeEvery("GET_CATEGORIES", getCategories),
  takeEvery("GET_CATEGORY", getCategory),
  takeEvery("GET_CATEGORY_BY_URL", getCategoryByUrl),
];
