import { call, put, takeLatest } from 'redux-saga/effects';
import { getNutrientData } from '../../api/api';
import { nutrientAction } from './slice';

function* handleGetNutrient (action) {
  const {loadSuccess , loadFail} = nutrientAction;
  try{
    const result = yield call(getNutrientData, action.payload.searchTerm, action.payload.pageNum);
    yield put(loadSuccess(result));
  }catch(err){
    console.log(err)
    yield put(loadFail(err));
  }
}

export function* watchSearch() {
  const { load } = nutrientAction;
  yield takeLatest(load, handleGetNutrient);
}