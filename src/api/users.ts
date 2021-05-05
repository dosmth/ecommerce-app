/*
API запросы для пользователей
*/
import { API } from "../API";
import { getRequest } from "./common";

const fetchUrl = API + "user/";

// получаем пользователей
export const api_get_all = () => {
  return getRequest(fetchUrl);
};

// получаем пользователя
export const api_get_one = (id: number) => {
  return getRequest(fetchUrl + id);
};
