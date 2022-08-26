import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dietByMonth : [],
  dietByDate : {},
  error: null
}

const reducers = {
  loadByMonth: (state, action) => {state.isLoading = true},
  loadByDay: (state, action) => {state.isLoading = true},
  loadSuccessByMonth: (state, action) => {
    state.isLoading = false;
    state.dietByMonth = action.payload;
  },
  loadSuccessByDay: (state, action) => {
    state.isLoading = false;
    state.dietByDate = action.payload;
  },
  loadFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  }
}

const name = 'Diet';

const slice = createSlice({
  name, initialState, reducers
})

const selectDailyNutrient = createSelector(
  state => state.dietByDate,
  (dietByDate) => {
    if(Object.keys(dietByDate).length === 0){
      return []
    } else {
      const mergeAllMeal = [
        ...dietByDate.intakenFoodDesk.breakfast,
        ...dietByDate.intakenFoodDesk.lunch,
        ...dietByDate.intakenFoodDesk.dinner,
      ];
      return mergeAllMeal;
    }
  }
);

const selectStateByMonth = createSelector(
  state => state.isLoading,
  state => state.dietByMonth,
  state => state.error,
  (isLoading, dietByMonth, error) => {
    return {isLoading, dietByMonth, error}
  }
)
const selectStateByDate = createSelector(
  state => state.isLoading,
  state => state.dietByDate,
  state => state.error,
  (isLoading, dietByDate, error) => {
    return {isLoading, dietByDate, error}
  }
)

export const dietSelector = {
  month: state => selectStateByMonth(state[Diet]),
  date: state => selectStateByDate(state[Diet]),
  dailyNutrient: state => selectDailyNutrient(state[Diet]),
}


// getDietByDate
// export const getDietByDate = (state, day) => {
//   return state[name].dietData.find(diet => { 
//     const date = new Date(diet.intakenFoodDesk.date).getTime();
//     // eslint-disable-next-line eqeqeq
//     return new Date(date).getTime() == day
//   }).intakenFoodDesk;
// }

export const Diet = slice.name;
export const dietReducer = slice.reducer;
export const dietAction = slice.actions;