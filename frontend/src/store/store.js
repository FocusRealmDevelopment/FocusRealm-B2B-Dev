import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
import themeReducer from "../features/theme/themeSlice";
import chatReducer from "../features/chat/chatSlice";

const reducer = {
  user: userReducer,
  theme: themeReducer,
  chat: chatReducer,
};

let initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
