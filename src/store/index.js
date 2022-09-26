import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { Search, nutrientReducer } from "../features/Search/slice";
import {selectReducer, Select} from '../features/Select/slice';
import { authReducer, Auth } from "../features/Auth/slice";
import { dietReducer, Diet } from "../features/Diet/slice";
import { rootSaga } from "./root-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Select']
}

export const rootReducer = combineReducers({
  [Search]: nutrientReducer,
  [Select]: selectReducer,
  [Auth]: authReducer,
  [Diet]: dietReducer
})

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);