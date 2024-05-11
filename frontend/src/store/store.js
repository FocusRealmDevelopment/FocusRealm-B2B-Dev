import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
import themeReducer from "../features/theme/themeSlice";
import chatReducer from "../features/chat/chatSlice";
import profileReducer from "../features/fetchProfile/profileSlice";

const reducer = {
  user: userReducer,
  theme: themeReducer,
  chat: chatReducer,
  profile: profileReducer,
};

let initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
