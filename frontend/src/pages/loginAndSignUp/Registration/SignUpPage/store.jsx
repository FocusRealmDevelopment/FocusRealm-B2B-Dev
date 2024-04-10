import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  userDetailsReducer,
  userReducer,
} from "../SignUpPage/userReducer";

const reducer = combineReducers({
  user: userReducer,

  forgotPassword: forgotPasswordReducer,

  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
