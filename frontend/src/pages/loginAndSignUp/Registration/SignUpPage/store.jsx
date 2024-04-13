import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  forgotPasswordReducer,
  userDetailsReducer,
  userReducer,
} from "../SignUpPage/userReducer";

const reducer = {
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
};

const store = configureStore({
  reducer,
});

export default store;
