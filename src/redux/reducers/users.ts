import { AnyAction } from "redux"; // for TS
import {
  GET_USERS,
  USERS_FETCHED,
  USERS_ERRORED,
  GET_USER,
  USER_FETCHED,
  USER_ERRORED,
} from "../constants/action-types";

interface initialState {
  isLoadingUsers: boolean;
  isLoadingUser: boolean;

  isErrorUsers: boolean;
  isErrorUser: boolean;
  errorMessage: string;

  users: {
    name: string;
    img: string;
    addr: string;
    id: number;
    phone: string;
  }[];
  user:
    | {
        name: string;
        img: string;
        addr: string;
        id: number;
        phone: string;
      }
    | {};
}

const initialState: initialState = {
  isLoadingUsers: false,
  isLoadingUser: false,

  isErrorUsers: false,
  isErrorUser: false,
  errorMessage: "",

  users: [],
  user: {},
};

function usersReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        isLoadingUsers: true,
      });
    case USERS_FETCHED:
      return Object.assign({}, state, {
        users: action.payload,
        isErrorUsers: false,
        isLoadingUsers: false,
      });
    case USERS_ERRORED:
      return Object.assign({}, state, {
        isErrorUsers: true,
        isLoadingUsers: false,
        errorMessage: action.payload,
      });

    case GET_USER:
      return Object.assign({}, state, {
        isLoadingUser: true,
      });
    case USER_FETCHED:
      return Object.assign({}, state, {
        user: action.payload,
        isErrorUser: false,
        isLoadingUser: false,
      });
    case USER_ERRORED:
      return Object.assign({}, state, {
        isErrorUser: true,
        isLoadingUser: false,
        errorMessage: action.payload,
      });
  }
  return state;
}

export default usersReducer;
