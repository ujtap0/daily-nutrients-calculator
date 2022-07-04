import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  breakfast : [],
  lunch : [],
  dinner : [],
}

const reducers = {
  addMeal: (state, action) => {
    state[action.payload.meal].push(action.payload)
  },
  removeMeal: (state, action) => {
    state[action.payload.meal] = state[action.payload.meal].filter((food)=>food.foodData.DESC_KOR !== action.payload.name)
  }
}

const name = 'Select';

const slice = createSlice({
  name, initialState, reducers
})

const selectAllState = createSelector(
  state => state.breakfast,
  state => state.lunch,
  state => state.dinner,
  (breakfast, lunch, dinner) => {
    return {breakfast, lunch, dinner}
  }
)

export const selectSelector = {
  all: state => selectAllState(state[Select])
}

export const Select = slice.name;
export const selectReducer = slice.reducer;
export const selectAction = slice.actions;