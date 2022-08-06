import { takeLatest, put, call } from 'redux-saga/effects';
import { dietAction } from "./slice";
import { getDietPerMonth } from '../../utils/firebase/firebase';

function* getDietByChangingMonth (action) {
  const {loadSuccess, loadFail} = dietAction;
  try{
    const dietOnCurrentMonthAndYear = yield call(getDietPerMonth,action.payload.year, action.payload.month);
    yield put(loadSuccess(dietOnCurrentMonthAndYear));
  }catch(err){
    console.log(err);
    yield put(loadFail(err))
  }
}

export function* watchDiet () {
  const { load } = dietAction;
  yield takeLatest(load, getDietByChangingMonth)
}