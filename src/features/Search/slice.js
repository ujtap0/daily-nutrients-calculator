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
