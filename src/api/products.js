/*
API запросы для товаров
*/
import { API } from "../API.js";
import { getRequest } from "./common.js";

const fetchUrl = API + "product/";

// получаем товары по категории
export const api_get_by_category = (category_id) => {
  return getRequest(API + "products-by-category/" + category_id);
};

// получаем товары по пользователю
export const api_get_by_user = (user_id) => {
  return getRequest(API + "products-by-user/" + user_id);
};

// получаем информацию о товаре
export const api_get_one = (id) => {
  return getRequest(fetchUrl + id);
};
