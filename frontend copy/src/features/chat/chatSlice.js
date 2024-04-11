import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: {
    name: "",
    messages: [],
    unread: "",
    // selectedChat: null,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    showChat: (state, action) => {
      state.chat.name = action.payload.name;
      state.chat.messages = action.payload.messages;
      state.chat.unread = action.payload.unread;
      // state.chat.selectedChat = action.payload.name;
    },
    closeChat: (state) => {
      state.chat.name = "";
    },
  },
});

export const { showChat, closeChat } = chatSlice.actions;

export default chatSlice.reducer;
