import "regenerator-runtime/runtime";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  api_get_by_category,
  api_get_by_user,
  api_get_one,
} from "../../api/products";

function* getProductsByCategory(action) {
  try {
    const products = yield call(
      api_get_by_category,
      action.payload.category_id
    );
    yield put({ type: "PRODUCTS_BY_CATEGORY_FETCHED", payload: products });
  } catch (e) {
    yield put({ type: "PRODUCTS_BY_CATEGORY_ERRORED", payload: e.message });
  }
}

function* getProductsByUser(action) {
  try {
    const products = yield call(api_get_by_user, action.payload.user_id);
    yield put({ type: "PRODUCTS_BY_USER_FETCHED", payload: products });
  } catch (e) {
    yield put({ type: "PRODUCTS_BY_USER_ERRORED", payload: e.message });
  }
}

function* getProduct(action) {
  try {
    const product = yield call(api_get_one, action.payload.id);
    yield put({ type: "PRODUCT_FETCHED", payload: product });
  } catch (e) {
    yield put({ type: "PRODUCT_ERRORED", payload: e.message });
  }
}

export const productsSaga = [
  takeEvery("GET_PRODUCTS_BY_CATEGORY", getProductsByCategory),
  takeEvery("GET_PRODUCTS_BY_USER", getProductsByUser),
  takeEvery("GET_PRODUCT", getProduct),
];
