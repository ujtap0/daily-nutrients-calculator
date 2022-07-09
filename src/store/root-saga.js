import {all, call} from 'redux-saga/effects';
import { watchSearch } from '../features/Search/saga';
import { watchAuth } from '../features/Auth/saga';
import { watchFood } from '../features/Select/saga';

//yield call(watchSearch)
//yield call(watchAuth)
//위와 같이 쓰면 두 번째 이펙트는 첫 번째 call이 resolve되기 전까지는 실행되지 않음

//아래와 같이 이펙트 배열을 yiedl하면, 제너레이터는 모든 이펙트들이 resolve되거나, 어느 하나라도 reject될 때까지 block된다
export function * rootSaga() {
  //제너레이터 함수를 배열의 형태로 인자에 넣어주면, 제너레이터 함수들이 병행적으로 동시에 실행되고 전부 resolve될 때까지 기다린다
  yield all([
    call(watchSearch),
    call(watchAuth),
    call(watchFood)
  ])
}