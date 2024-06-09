import { configureStore } from "@reduxjs/toolkit";
import {
   combineReducers,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const reducer = combineReducers({});

const store = configureStore({
   reducer: reducer,
   // preloadedState
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
   devTools: true,
});

export default store;