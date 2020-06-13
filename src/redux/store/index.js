import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

// const store = createStore(reducer);

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(rootSaga);

export default store;
