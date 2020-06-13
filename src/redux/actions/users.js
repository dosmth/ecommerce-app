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
export function usersFetched(payload) {
  return { type: USERS_FETCHED, payload: { payload } };
}
export function usersErrored(payload) {
  return { type: USERS_ERRORED, payload: { payload } };
}

// получить одного пользователя
export function getUser(id) {
  return { type: GET_USER, payload: { id } };
}
export function userFetched(payload) {
  return { type: USER_FETCHED, payload: { payload } };
}
export function userErrored(payload) {
  return { type: USER_ERRORED, payload: { payload } };
}
