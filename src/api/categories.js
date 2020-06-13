/*
API запросы для категорий
*/
import { API } from "../API.js";
import { getRequest } from "./common.js";

const fetchUrl = API + "category/";

// получаем категории
export const api_get_all = () => {
  return getRequest(fetchUrl);
};

// получаем одну категорию
export const api_get_one = (id) => {
  return getRequest(fetchUrl + id, "GET");
};

// получаем одну категорию по url
export const api_get_one_by_url = (url) => {
  return getRequest(API + "category-by-url?url=" + url, "GET");
};

// получаем url категории по id
export const api_get_url_by_id = (id) => {
  return getRequest(API + "category-url-by-id?id=" + id, "GET");
};
