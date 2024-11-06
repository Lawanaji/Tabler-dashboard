import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     name: "John Doe",
//     age: 30,
//     gender: "Male",
//   },
//   {
//     name: "Peter Paul",
//     age: 33,
//     gender: "Male",
//   },
// ];

const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    updateStudents: (state, action) => {
      state = action.payload;
      return state;
    },
    // addStudent: (state, action) => {},
    // deleteStudent: (state, action) => {},
  },
});

export const { updateStudents } = studentSlice.actions;
export default studentSlice.reducer;
