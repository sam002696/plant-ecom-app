import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import ApiReducer from "./apiSlice";
import cartReducer from "./cartSlice";
import ErrorMessageReducer from "./errorMessageSlice";
import ToastAlertReducer from "./toastAlertSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    api: ApiReducer,
    cart: cartReducer,
    toastAlert: ToastAlertReducer,
    errorMessage: ErrorMessageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
