import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import ApiReducer from "./apiSlice";
import cartReducer from "./cartSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    api: ApiReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
