/*
API запросы для пользователей
*/
import { API } from "../API.js";
import { getRequest } from "./common.js";

const fetchUrl = API + "user/";

// получаем пользователей
export const api_get_all = () => {
  return getRequest(fetchUrl);
};

// получаем пользователя
export const api_get_one = (id) => {
  return getRequest(fetchUrl + id, "GET");
};
