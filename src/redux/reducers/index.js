import { combineReducers } from "redux";
import categories from "./categories";
import users from "./users";
import products from "./products";

export default combineReducers({
  categories: categories,
  users: users,
  products: products,
});
