import {
  GET_PRODUCTS_BY_CATEGORY,
  PRODUCTS_BY_CATEGORY_FETCHED,
  PRODUCTS_BY_CATEGORY_ERRORED,
} from "../constants/action-types";
import {
  GET_PRODUCTS_BY_USER,
  PRODUCTS_BY_USER_FETCHED,
  PRODUCTS_BY_USER_ERRORED,
} from "../constants/action-types";
import {
  GET_PRODUCT,
  PRODUCT_FETCHED,
  PRODUCT_ERRORED,
} from "../constants/action-types";

// получить все товары в категории
export function getProducts(category_id: number) {
  return { type: GET_PRODUCTS_BY_CATEGORY, payload: { category_id } };
}
export function productsFetched(payload: {
  id: number;
  category_id: number;
  title: string;
  img: string;
  price: number;
}[]) {
  return { type: PRODUCTS_BY_CATEGORY_FETCHED, payload: { payload } };
}
export function productsErrored(payload: string) {
  return { type: PRODUCTS_BY_CATEGORY_ERRORED, payload: { payload } };
}

// получить все товары пользователя
export function getProductsByUser(user_id: number) {
  return { type: GET_PRODUCTS_BY_USER, payload: { user_id } };
}
export function productsByUserFetched(
  payload: {
    id: number;
    category_id: number;
    user_id: number;
    title: string;
    img: string;
    price: number;
    descr: string;
  }[]
) {
  return { type: PRODUCTS_BY_USER_FETCHED, payload: { payload } };
}
export function productByUserErrored(payload: string) {
  return { type: PRODUCTS_BY_USER_ERRORED, payload: { payload } };
}

// получить одну категорию
export function getProduct(id: number) {
  return { type: GET_PRODUCT, payload: { id } };
}
export function productFetched(payload: {
  id: number;
  category_id: number;
  user_id: number;
  title: string;
  img: string;
  price: number;
  descr: string;
}) {
  return { type: PRODUCT_FETCHED, payload: { payload } };
}
export function productErrored(payload: string) {
  return { type: PRODUCT_ERRORED, payload: { payload } };
}
