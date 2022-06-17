import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducer/rootReducer";



const persistConfig = {
  key: "root",
  storage,
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
console.log(store.subscribe(() => console.log(store.getState())))

export const persistor = persistStore(store);
