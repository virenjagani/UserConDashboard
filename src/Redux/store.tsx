import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/UserReducer";
import logger from "redux-logger";
import watcherSaga from "./Sagas/watcherSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

const persistor = persistStore(store);

export { persistor, store };
