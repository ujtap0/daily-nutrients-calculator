import {all, call} from 'redux-saga/effects';
import { watchSearch } from '../features/Search/saga';
import { watchAuth } from '../features/Auth/saga';
import { watchFood } from '../features/Select/saga';
import { watchDiet, watchDietByDate } from '../features/Diet/saga';

export function * rootSaga() {
  yield all([
    call(watchSearch),
    call(watchAuth),
    call(watchFood),
    call(watchDiet),
    call(watchDietByDate),
  ])
}