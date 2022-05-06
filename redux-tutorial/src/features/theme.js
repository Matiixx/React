import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValues },
  reducers: {
    updateColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateColor } = themeSlice.actions;

export default themeSlice.reducer;
