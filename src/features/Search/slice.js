import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: '',
  isLoading: false,
  currentPage: 0,
  totalPage: 0,
  data : [],
  error: null
}

const reducers = {
  load: (state, action) =>{
    state.searchTerm = action.payload.searchTerm;
    state.isLoading = true;
  },
  loadSuccess: (state, action) => {
    state.isLoading = false;
    state.data= action.payload.items;
    state.totalPage = Math.ceil(action.payload.totalCount / action.payload.numOfRows);
    state.currentPage = action.payload.pageNo
  },
  loadFail: (state, action) => {
    state.isLoading = false;
    state.error= action.payload;
  },
  reset: (state) => {
    state.isLoading = false;
    state.data = [];
    state.currentPage = 0;
    state.totalPage = 0;
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
  state => state.searchTerm,
  state => state.data,
  state => state.error,
  state => state.totalPage,
  (isLoading, searchTerm, data, error, totalPage) => {
    return {isLoading, searchTerm, data, error, totalPage}
  }
);

export const nutrientSelector = {
  all: state => selectAllState(state[Search]),
}

export const Search = slice.name;
export const nutrientReducer = slice.reducer;
export const nutrientAction = slice.actions;
