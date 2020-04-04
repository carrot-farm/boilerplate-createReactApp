import axios from 'axios';
import { put, take, select, call, fork } from 'redux-saga/effects';

import { 
  RUN_SAGAS_ACTION, 
  ADD_TASKS, 
  INCREAMENT,
  // TEST_CALL_ACTION, 
  INITIALIZE_ACTION,
  addRequestIdAction, 
  removeRequestIdAction, 
  setValue,
} from './baseActions';

/* ==========================================
	workers
========================================== */
// ===== ajax 요청
export function* reqeustSaga({ method = 'get', uri }) {
  // const { base: { config: { host }, requestIds } } = yield select();
  const { base: { config: { host } } } = yield select();
  const url = `${host}/api${uri}`;
  const headers = {
    "Cache" : "no-cache",
    "Accept" : "application/json",
    "Content-Type" : "application/json",
  };
  const requestId = `${method}:${uri}`;

  try{
    yield put(addRequestIdAction({ requestId }));
    const res = yield call(axios, { url, headers });
    yield put(removeRequestIdAction({ requestId }));
    return res;
  }catch(e){
    yield put(removeRequestIdAction({ requestId }));
    console.error('> ERROR \n', e);
  }
}

// ===== 초기화
function* initializeSaga({ config }) {
  
  // # 컨피그 셋팅
  yield put(setValue({ key: 'config', value: config }));

  // # 초기화 데이터 가져오기
  // const res = yield reqeustSaga(getTest());

  // console.log('> initialize done : ', res)
}

// ===== 숫자를 1 늘려주는 사가
function* increamentSaga(_num) {
  const { base: { num }} = yield select();
  yield put(setValue({key: 'num', value: num + 1}));
}


/* ==========================================
	watchers
========================================== */
// ===== 외부에서 사가를 직접 호출
function* watchRunSagas() {
  while (true) {
    const {
      payload: { sagas, resolve },
    } = yield take(RUN_SAGAS_ACTION);
    for (const i of sagas) {
      yield* i.saga(i.payload);
    }
    resolve(yield select());
  }
}

// ===== task 추가
function* watchAddTasks() {
  while (true) {
    const { payload, resolve } = yield take(ADD_TASKS);
    const type = typeof payload;

    if (type === 'function') {
      yield fork(payload);
    } else {
      for (const i of payload) {
        yield fork(i);
      }
    }
    // ===== sync dispatch 로 호출시 resolve 가 있을 경우.
    if (resolve) {
      resolve();
    }
  }
}

// ===== 초기화(첫 서버 렌더링 시 호출)
function* watchInitialize() {
  while (true) {
    const { payload: { config }, resolve } = yield take(INITIALIZE_ACTION);
    yield initializeSaga({ config });
    resolve();
  }
}

// ===== 테스트 코드용 사가
function* watchIncreament(){
  while(true){
    yield take(INCREAMENT);
    yield increamentSaga();
  }
}

// ===== 테스트 코드용 사가
// function* watchTestCall(){
//   while(true){
//     const { payload } = yield take(TEST_CALL_ACTION);
//     yield call(increamentSaga);
//   }
// }




/* ==========================================
	watcher 내보내기
========================================== */
export default {
  watchRunSagas,
  watchAddTasks,
  watchInitialize,
  watchIncreament,
};