import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null
}

const reducers = {
  load: (state) => {state.isLoading = true},
  loadSuccess: (state, action) => {
    state.isLoading = false;
    state.currentUser = action.payload;
  },
  loadFail: (state, action) => {
    state.isLoading = false
    state.error = action.payload;
  }
}

const name = 'Auth';

const slice = createSlice({
  name, initialState, reducers
})

export const Auth = slice.name;
export const authReducer = slice.reducer;
export const authActions = slice.actions;

//액션 생성 함수
export const googleSignInStart = createAction('Auth/GOOGLE_SIGN_IN_START');
export const checkUserSession = createAction('Auth/CHECK_USER_SESSION');