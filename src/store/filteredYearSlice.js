import { createSlice } from "@reduxjs/toolkit";

export const filteredYearSlice = createSlice({
  name: "filteredYear",
  initialState: { value: 2021 },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { update } = filteredYearSlice.actions;
export default filteredYearSlice.reducer;
