import {takeLatest, put, call, all} from 'redux-saga/effects';
import { googleSignInStart, authActions, checkUserSession, addAdditonalUserInfo } from './slice';
import { getCurrentUser, getUserDescFromAuth, signInWithGooglePopup, addUserInfo } from '../../utils/firebase/firebase';
import { getAdditionalUserInfo } from 'firebase/auth';

export function* getSnapshotFromUserAuth (userAuth) {
  const { loadSuccess, loadFail } = authActions;
  try{
    const userSnapshot = yield call(getUserDescFromAuth, userAuth);
    yield put(loadSuccess({...userSnapshot.data()}));
  }catch(error){
    yield put(loadFail(error));
  }
}

export function* updateUserInfo (action) {
  const { loadSuccess, loadFail, setIsNewUser } = authActions;
  try{
    yield put(setIsNewUser(false));
    const userSnapshot = yield call(addUserInfo, action.payload);
    yield put(loadSuccess({...userSnapshot.data()}));
  }catch(error){
    yield put(loadFail(error));
  }
}

export function* signInWithGoogle(){
  const { loadFail, setIsNewUser } = authActions;
  try{
    const result = yield call(signInWithGooglePopup);
    const { user } = result;
    const { isNewUser } = yield call(getAdditionalUserInfo, result);
    yield put(setIsNewUser(isNewUser));
    yield call(getSnapshotFromUserAuth, user);
  }catch(error){
    console.log(error)
    yield put(loadFail(error));
  }
}

export function* isUserAuthenticated(){
  const { loadFail } = authActions;
  try{
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth)
  }catch(error){
    yield put(loadFail(error))
  }
}

export function* onSignInStart() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* onCheckUserSession(){
  yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

export function* onAddAddtionalInfo(){
  yield takeLatest(addAdditonalUserInfo.type, updateUserInfo)
}

export function* watchAuth() {
  yield all([
    call(onCheckUserSession),
    call(onSignInStart),
    call(onAddAddtionalInfo),
  ])
}