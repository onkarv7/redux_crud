import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
