import {takeLatest, put, call, all} from 'redux-saga/effects';
import { submitIntakedFoodsDesk, selectAction } from './slice';
import { addFoodToDocument } from '../../utils/firebase/firebase';

export function* addFoodToDoc(action) {
  const { submitError } = selectAction;
  try{
    yield call(addFoodToDocument, action.payload);
  }catch(error){
    yield put(submitError(error))
  }
}

export function* onSubmitStart() {
  yield takeLatest(submitIntakedFoodsDesk.type, addFoodToDoc)
}

export function* watchFood() {
  yield all([
    call(onSubmitStart)
  ])
}