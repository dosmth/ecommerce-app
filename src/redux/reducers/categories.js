import {
  GET_CATEGORIES,
  CATEGORIES_FETCHED,
  CATEGORIES_ERRORED,
  GET_CATEGORY,
  GET_CATEGORY_BY_URL,
  CATEGORY_FETCHED,
  CATEGORY_ERRORED,
} from "../constants/action-types";

const initialState = {
  isLoadingCategories: false,
  isLoadingCategory: false,

  isErrorCategories: false,
  isErrorCategory: false,
  errorMessage: "",

  categories: [],
  category: {},
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, state, {
        isLoadingCategories: true,
      });
    case CATEGORIES_FETCHED:
      return Object.assign({}, state, {
        categories: action.payload,
        isErrorCategories: false,
        isLoadingCategories: false,
      });
    case CATEGORIES_ERRORED:
      return Object.assign({}, state, {
        isErrorCategories: true,
        isLoadingCategories: false,
        errorMessage: action.payload,
      });

    case GET_CATEGORY:
      return Object.assign({}, state, {
        isLoadingCategory: true,
      });
    case GET_CATEGORY_BY_URL:
      return Object.assign({}, state, {
        isLoadingCategory: true,
      });
    case CATEGORY_FETCHED:
      return Object.assign({}, state, {
        category: action.payload,
        isErrorCategory: false,
        isLoadingCategory: false,
      });
    case CATEGORY_ERRORED:
      return Object.assign({}, state, {
        isErrorCategory: true,
        isLoadingCategory: false,
        errorMessage: action.payload,
      });
  }
  return state;
}

export default categoriesReducer;
