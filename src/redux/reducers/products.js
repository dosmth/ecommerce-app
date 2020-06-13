import {
  GET_PRODUCTS_BY_CATEGORY,
  PRODUCTS_BY_CATEGORY_FETCHED,
  PRODUCTS_BY_CATEGORY_ERRORED,
  GET_PRODUCTS_BY_USER,
  PRODUCTS_BY_USER_FETCHED,
  PRODUCTS_BY_USER_ERRORED,
  GET_PRODUCT,
  PRODUCT_FETCHED,
  PRODUCT_ERRORED,
} from "../constants/action-types";

const initialState = {
  isError: false,
  errorMessage: "",
  isLoading: false,
  products_by_category: [],
  products_by_user: [],
  product: {},
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORY:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case PRODUCTS_BY_CATEGORY_FETCHED:
      return Object.assign({}, state, {
        products_by_category: action.payload,
        isError: false,
        isLoading: false,
      });
    case PRODUCTS_BY_CATEGORY_ERRORED:
      return Object.assign({}, state, {
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      });

    case GET_PRODUCTS_BY_USER:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case PRODUCTS_BY_USER_FETCHED:
      return Object.assign({}, state, {
        products_by_user: action.payload,
        isError: false,
        isLoading: false,
      });
    case PRODUCTS_BY_USER_ERRORED:
      return Object.assign({}, state, {
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      });

    case GET_PRODUCT:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case PRODUCT_FETCHED:
      return Object.assign({}, state, {
        product: action.payload,
        isError: false,
        isLoading: false,
      });
    case PRODUCT_ERRORED:
      return Object.assign({}, state, {
        isError: true,
        isLoading: false,
        errorMessage: action.payload,
      });
  }
  return state;
}

export default productsReducer;
