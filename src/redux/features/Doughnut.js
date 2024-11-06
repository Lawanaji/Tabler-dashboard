import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [37, 63],
};

const doughnutSlice = createSlice({
  name: "doughnutdata",
  initialState,
  reducers: {},
});

export default doughnutSlice.reducer;
