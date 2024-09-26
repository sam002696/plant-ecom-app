import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import ApiReducer from "./apiSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    api: ApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
