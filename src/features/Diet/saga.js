import { takeLatest, put, call } from 'redux-saga/effects';
import { dietAction } from "./slice";
import { getDietPerMonth, getDietByDate } from '../../utils/firebase/firebase';

function* getDietByDay (action) {
  const {loadSuccessByDay, loadFail} = dietAction;
  try{
    const dietByDate = yield call (getDietByDate, action.payload);
    yield put(loadSuccessByDay(dietByDate))
  }catch(err){
    console.log(err);
    yield put(loadFail(err))
  }
}

function* getDietByChangingMonth (action) {
  const {loadSuccessByMonth, loadFail} = dietAction;
  try{
    const dietOnCurrentMonthAndYear = yield call(getDietPerMonth,action.payload.year, action.payload.month);
    yield put(loadSuccessByMonth(dietOnCurrentMonthAndYear));
  }catch(err){
    console.log(err);
    yield put(loadFail(err))
  }
}

export function* watchDietByDate () {
  const { loadByDay } = dietAction;
  yield takeLatest(loadByDay, getDietByDay);
}

export function* watchDiet () {
  const { loadByMonth } = dietAction;
  yield takeLatest(loadByMonth, getDietByChangingMonth)
}