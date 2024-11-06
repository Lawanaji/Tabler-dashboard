import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labels: ["January", "February", "March", "April", "May", "June"],
  values: [30, 20, 50, 40, 60, 70],
};

const developmentActivitySlice = createSlice({
  name: "developmentactivities",
  initialState,
  reducers: {},
});

export default developmentActivitySlice.reducer;
