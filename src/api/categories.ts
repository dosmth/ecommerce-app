/*
API запросы для категорий
*/
import { API } from "../API";
import { getRequest } from "./common";

const fetchUrl = API + "category/";

// получаем категории
export const api_get_all = () => {
  return getRequest(fetchUrl);
};

// получаем одну категорию
export const api_get_one = (id: number) => {
  return getRequest(fetchUrl + id);
};

// получаем одну категорию по url
export const api_get_one_by_url = (url: string) => {
  return getRequest(API + "category-by-url?url=" + url);
};

// получаем url категории по id
export const api_get_url_by_id = (id: number) => {
  return getRequest(API + "category-url-by-id?id=" + id);
};
