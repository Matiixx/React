import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  name: "",
  age: 0,
  email: "",
};

export const userSilce = createSlice({
  name: "user",
  initialState: { value: initialStateValues },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValues;
    },
  },
});

export const { login, logout } = userSilce.actions;

export default userSilce.reducer;
