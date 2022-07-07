import {takeLatest, put, call, all} from 'redux-saga/effects';
import { googleSignInStart, authActions, checkUserSession } from './slice';
import { getCurrentUser, getUserDescFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase';

export function* getSnapshotFromUserAuth (userAuth) {
  const { loadSuccess, loadFail } = authActions;
  try{
    const userSnapshot = yield call(getUserDescFromAuth, userAuth);
    console.log(userSnapshot.data())
    yield put(loadSuccess({...userSnapshot.data()}));
  }catch(error){
    console.log(error)
    yield put(loadFail(error));
  }
}

export function* signInWithGoogle(){
  const { loadFail } = authActions;
  try{
    const { user } = yield call(signInWithGooglePopup);
    console.log(user);
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

export function* watchAuth() {
  yield all([
    call(onCheckUserSession),
    call(onSignInStart)
  ])
}