import { createSlice, createAction, createSelector } from "@reduxjs/toolkit";

const initialState = {
  isNewUser: null,
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
  },
  setIsNewUser: (state, action) => {
    state.isNewUser = action.payload;
  },
  clear: (state) => {
    state.isNewUser = null;
    state.currentUser= null
  }
}

const name = 'Auth';

const slice = createSlice({
  name, initialState, reducers
});

//useSelector가 실행될 때마다 정의된 함수는 매번 새로운 배열을 반환하게 되면서 이전에 참조하고 있던 객체 주소가 현재 주소와의 차이를 발생시켜서 계산 비용이 발생

const authAllState = createSelector(
  state => state.isNewUser,
  state => state.currentUser,
  state => state.isLoading,
  state => state.error,
  (isNewUser, currentUser, isLoading, error) => {
    return {isNewUser, currentUser, isLoading, error}
  }
);

export const authSelector = {
  all: state => authAllState(state[Auth]),
};

export const Auth = slice.name;
export const authReducer = slice.reducer;
export const authActions = slice.actions;

//액션 생성 함수
export const googleSignInStart = createAction('Auth/GOOGLE_SIGN_IN_START');
export const addAdditonalUserInfo = createAction('Auth/USER_INFO_UPDATE');
export const checkUserSession = createAction('Auth/CHECK_USER_SESSION');
export const signOutStart = createAction('Auth/SIGN_OUT')