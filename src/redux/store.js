// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./combineReducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  expireTime: 3600, // expires after 1 hour (in seconds)
  blacklist: [
    // "notification",
  ], //list of reducers not to save in the cache
  whilelist: ["auth"], //list of reducers to save in the cache
  // version:1
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});


export const persistor = persistStore(store);
