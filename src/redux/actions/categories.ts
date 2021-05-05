import {
  GET_CATEGORIES,
  CATEGORIES_FETCHED,
  CATEGORIES_ERRORED,
} from "../constants/action-types";
import {
  GET_CATEGORY,
  GET_CATEGORY_BY_URL,
  CATEGORY_FETCHED,
  CATEGORY_ERRORED,
} from "../constants/action-types";

// получить все категории
export function getCategories() {
  return { type: GET_CATEGORIES };
}
export function categoriesFetched(
  payload: { id: number; title: string; url: string }[]
) {
  return { type: CATEGORIES_FETCHED, payload: { payload } };
}
export function categoriesErrored(payload: string) {
  return { type: CATEGORIES_ERRORED, payload: { payload } };
}

// получить одну категорию
export function getCategory(id: number) {
  return { type: GET_CATEGORY, payload: { id } };
}
export function getCategoryByUrl(url: string) {
  return { type: GET_CATEGORY_BY_URL, payload: { url } };
}
export function categoryFetched(payload: {
  id: number;
  title: string;
  url: string;
}) {
  return { type: CATEGORY_FETCHED, payload: { payload } };
}
export function categoryErrored(payload: string) {
  return { type: CATEGORY_ERRORED, payload: { payload } };
}
