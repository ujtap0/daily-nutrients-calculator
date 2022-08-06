import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dietData : [],
  error: null
}

const reducers = {
  load: (state, action) => {state.isLoading = true},
  loadSuccess: (state, action) => {
    state.isLoading = false;
    state.dietData = action.payload;
  },
  loadFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload
  }
}

const name = 'Diet';

const slice = createSlice({
  name, initialState, reducers
})

export const Diet = slice.name;
export const dietReducer = slice.reducer;
export const dietAction = slice.actions;