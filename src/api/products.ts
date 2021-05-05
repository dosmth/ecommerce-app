/*
API запросы для товаров
*/
import { API } from "../API";
import { getRequest } from "./common";

const fetchUrl = API + "product/";

// получаем товары по категории
export const api_get_by_category = (category_id: number) => {
  return getRequest(API + "products-by-category/" + category_id);
};

// получаем товары по пользователю
export const api_get_by_user = (user_id: number) => {
  return getRequest(API + "products-by-user/" + user_id);
};

// получаем информацию о товаре
export const api_get_one = (id: number) => {
  return getRequest(fetchUrl + id);
};
