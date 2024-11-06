import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labels: ["", "", ""],
  data: [9, 10, 33, 47],
};

const pieChartSlice = createSlice({
  name: "piechatdata",
  initialState,
  reducers: {},
});

export default pieChartSlice.reducer;
