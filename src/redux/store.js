import { persistStore } from "redux-persist";

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
