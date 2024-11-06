import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    percentage: "34",
    counts: 70,
    content: "New tickets",
  },
  {
    percentage: "+6%",
    counts: 50,
    content: "Closed Today",
  },
  {
    percentage: "+34%",
    counts: 7,
    content: "Replies",
  },
  {
    percentage: "+3%",
    counts: " 45.35K",
    content: "Followers",
  },
  {
    percentage: "-29%",
    counts: "$95",
    content: "New tickets",
  },
  {
    percentage: "-1%",
    counts: 612,
    content: "New tickets",
  },
];

const metricSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
});

export default metricSlice.reducer;
