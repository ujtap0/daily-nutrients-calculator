import { call, put, takeLatest } from 'redux-saga/effects';
import { getNutrientData } from '../../api/api';
import { nutrientAction } from './slice';

function* handleGetNutrient (action) {
  const {loadSuccess , loadFail} = nutrientAction;
  try{
    //call: 함수 호출 첫번째 파라미터는 함수이고 나머지는 해당 함수에 들어갈 인수
    const nutrient = yield call(getNutrientData, action.payload);
    //put: 특정 액션을 dispatch
    yield put(loadSuccess(nutrient));
  }catch(err){
    console.log(err)
    yield put(loadFail(err));
  }
}

export function* watchSearch() {
  const { load } = nutrientAction;
  //load 액션 함수를 인자로 넣고, handlerGetNutrient함수를 두번째 인자로 넣음
  //load 액션이 dispatch되면 saga에서 load를 take한 후 handleGetNutrient generator함수를 실행시킨다
  //takeLastes는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행
  //load액션에 대해 기존에 진행중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서면 handleGetNutrient을 실행
  yield takeLatest(load, handleGetNutrient);
}