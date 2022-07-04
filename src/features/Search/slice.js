import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data : [],
  error: null
}

const reducers = {
  load: (state, action) =>{state.isLoading = true},
  loadSuccess: (state, action) => {
    state.isLoading = false;
    state.data= action.payload;
  },
  loadFail: (state, action) => {
    state.isLoading = false;
    state.error= action.payload;
  },
  reset: (state) => {
    state.isLoading= false;
    state.data = [];
    state.error = null;
}}

const name = 'Search';

const slice = createSlice({
  name, initialState, reducers
})

//createSelector: useSelector가 실행될 때마다 그안에 정의된 함수는 매번 새로운 배열을 반환하게 되면서 이전에 참조하고 있던 객체 주소가 현재 주소와의 차이를 발생
//rerendering이 일어남

const selectAllState = createSelector(
  state => state.isLoading,
  state => state.data,
  state => state.error,
  (isLoading, data, error) => {
    return {isLoading, data, error}
  }
);

export const nutrientSelector = {
  all: state => selectAllState(state[Search]),
}

export const Search = slice.name;
export const nutrientReducer = slice.reducer;
export const nutrientAction = slice.actions;
