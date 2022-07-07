import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { Search, nutrientReducer } from "../features/Search/slice";
import {selectReducer, Select} from '../features/Select/slice';
import { authReducer, Auth } from "../features/Auth/slice";
import { rootSaga } from "./root-saga";

export const rootReducer = combineReducers({
  [Search]: nutrientReducer,
  [Select]: selectReducer,
  [Auth]: authReducer
})

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga);
  return store;
}


export default createStore;