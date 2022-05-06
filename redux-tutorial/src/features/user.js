import { createSlice } from "@reduxjs/toolkit";

export const userSilce = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSilce.actions;

export default userSilce.reducer;
