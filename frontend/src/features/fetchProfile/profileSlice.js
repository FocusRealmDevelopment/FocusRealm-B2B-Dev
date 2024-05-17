// profileSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for fetching profile data
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await fetch("http://localhost:4000/api/v1/me");
    const data = await response.json();
    return data;
  }
);

// Slice
export const profileSlice = createSlice({
  name: "profile",
  initialState: { data: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
