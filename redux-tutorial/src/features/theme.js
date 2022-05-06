import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValues },
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
