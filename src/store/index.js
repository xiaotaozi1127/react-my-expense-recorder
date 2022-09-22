import { configureStore } from "@reduxjs/toolkit";

import filteredYearReducer from "./filteredYearSlice";

export default configureStore({
  reducer: {
    filteredYear: filteredYearReducer,
  },
});
