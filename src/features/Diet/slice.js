import { createSlice, createSelector } from "@reduxjs/toolkit";

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

// selector
export const dietPerMonthSelector = state => state[name].dietData;

// getDietByDate
export const getDietByDate = (state, day) => {
  return state[name].dietData.find(diet => { 
    const date = new Date(diet.intakenFoodDesk.date).getTime();
    // eslint-disable-next-line eqeqeq
    return new Date(date).getTime() == day
  }).intakenFoodDesk;
}
export const Diet = slice.name;
export const dietReducer = slice.reducer;
export const dietAction = slice.actions;