import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../reducers/adminReducer";
import { studentReducer } from "../reducers/studentReducer";
import { teacherReducer } from "../reducers/teacherReducer";

const reducer = {
  admin: adminReducer,
  student:studentReducer,
  teacher:teacherReducer
};

let initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
