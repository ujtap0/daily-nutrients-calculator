import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { NUTRIENT, nutrientReducer } from "../features/Nutrient/slice";
import { rootSaga } from "./root-saga";

export const rootReducer = combineReducers({
  [NUTRIENT]: nutrientReducer,
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