import { createSlice } from "@reduxjs/toolkit";

interface initialValue {
  status: boolean;
}

const initialState: initialValue = {
  status: false,
};

export const slice = createSlice({
  name: "activeModal",
  initialState,
  reducers: {
    setStatus: (state: any, action: any) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = slice.actions;

export default slice.reducer;
