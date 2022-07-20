import { createSlice } from "@reduxjs/toolkit";

interface initialValue {
  status: boolean;
}

const initialState: initialValue = {
  status: false,
};

export const slice = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    setLoggedStatus: (state: any, action: any) => {
      state.status = action.payload;
    },
  },
});

export const { setLoggedStatus } = slice.actions;

export default slice.reducer;
