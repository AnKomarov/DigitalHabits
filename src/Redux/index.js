import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./Reducers";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store