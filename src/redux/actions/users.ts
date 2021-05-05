import {
  GET_USERS,
  USERS_FETCHED,
  USERS_ERRORED,
} from "../constants/action-types";
import {
  GET_USER,
  USER_FETCHED,
  USER_ERRORED,
} from "../constants/action-types";

// получить всех пользователей
export function getUsers() {
  return { type: GET_USERS };
}
export function usersFetched(
  payload: {
    name: string;
    img: string;
    addr: string;
    id: number;
    phone: string;
  }[]
) {
  return { type: USERS_FETCHED, payload: { payload } };
}
export function usersErrored(payload: string) {
  return { type: USERS_ERRORED, payload: { payload } };
}

// получить одного пользователя
export function getUser(id: number) {
  return { type: GET_USER, payload: { id } };
}
export function userFetched(payload: {
  name: string;
  img: string;
  addr: string;
  id: number;
  phone: string;
}) {
  return { type: USER_FETCHED, payload: { payload } };
}
export function userErrored(payload: string) {
  return { type: USER_ERRORED, payload: { payload } };
}
