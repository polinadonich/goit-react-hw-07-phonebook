/* eslint-disable import/no-anonymous-default-export */
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contacts from "./reducer";


// const myMiddleWare = (store) => (next) => (action) => {
//   console.log("", action);

//   next(action);
// };
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   myMiddleWare,
//   logger,
// ];

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

// const store = configureStore({
//   reducer: {
//     contacts: contacts,
//   },
//   middleware,

//   devTools: process.env.NODE_ENV === "development",
// });


// export default store;

const store = configureStore({
  reducer: {
  contacts: persistReducer(contactsPersistConfig, contacts)
},
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger)
});

const persistor = persistStore(store);

export { store, persistor };