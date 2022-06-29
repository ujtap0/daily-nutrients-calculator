import {all, call} from 'redux-saga/effects';
import { watchSearch } from '../features/Search/saga';

export function * rootSaga() {
  //제너레이터 함수를 배열의 형태로 인자에 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고 전부 resolve될 때까지 기다린다
  yield all([
    watchSearch(),
  ])
}