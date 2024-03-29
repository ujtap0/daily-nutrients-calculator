import { createSlice, createSelector, createAction } from "@reduxjs/toolkit";

const initialState = {
  date : '',
  breakfast : [],
  lunch : [],
  dinner : [],
  error: null,
  waterCount: 0,
}

const reducers = {
  addMeal: (state, action) => {
    state[action.payload.meal].push(action.payload);
    state.date = action.payload.date;
  },
  setCountWater: (state, action) => {
    state.waterCount = action.payload;
  },
  removeMeal: (state, action) => {
    state[action.payload.meal] = state[action.payload.meal].filter((food)=>food.foodData.DESC_KOR !== action.payload.name);
  },
  submitError: (state, action) => {
    state.error = action.payload;
  },
  clear: (state) => {
    state.date = '';
    state.waterCount= 0;
    state.breakfast = [];
    state.lunch = [];
    state.dinner = [];
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
  state => state.date,
  state => state.waterCount,
  (breakfast, lunch, dinner, date, waterCount) => {
    return {breakfast, lunch, dinner, date, waterCount}
  }
);

export const selectSelector = {
  all: state => selectAllState(state[Select]),
};

export const Select = slice.name;
export const selectReducer = slice.reducer;
export const selectAction = slice.actions;

//액션 생성 함수
export const submitIntakedFoodsDesk = createAction('Select/SUBMIT_MEAL_DESC_START');