import { configureStore } from "@reduxjs/toolkit";
import {
   combineReducers,
   // applyMiddleware
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import userLoginReducer from "./features/userLoginSlice";

const reducer = combineReducers({
   userLogin: userLoginReducer,
});

const store = configureStore({
   reducer: reducer,
   // preloadedState
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
   devTools: true,
});

export default store;
