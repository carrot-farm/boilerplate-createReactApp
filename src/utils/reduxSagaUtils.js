import { fork } from 'redux-saga/effects';

import { runSagasAction } from '../modules/base/baseActions';

/** ============================================
 * rootSaga 생성
 * @ example
 *   const rootSaga = createRootSaga(baseSagas, formSagas);
 ============================================ */
export const createRootSaga = (...sagas) => function* () {
  for(const a of sagas){
    for(const i in a){
      yield fork(a[i]);
    }
  }
};


/** ============================================
 * store를 이용해 외부에서 saga 실행
 * @ parmas
		sagas(arr) : 동기 실행할 사가들.
		store(obj) : getInitialProps에서 사용할 스토어
	 @ example
		await runSagas([
			{ saga: watchFlowB, payload: 'B' },
			{ saga: watchFlowA, payload: 'A' },
		], store);
============================================ */
export const runSagas = (sagas, store) =>
  new Promise((resolve, reject) =>
    store.dispatch(runSagasAction({ sagas, resolve }))
  );


/** ============================================
 * 외부에서 dispatch 시 payload에 resolve를 넘겨 resolve 시점을 선택한다.
 * @ parmas
		action(obj) : dispatch 할 action
		store(obj) : getInitialProps에서 사용할 스토어
   @ example
    . saga 정의
      function* watchTest() {
        const { payload, resolve } = yield take(TEST_ACTIOn);
        yield call(testSaga(payload))
        resolve(yield select());
      }
    . 호출
      await asyncDispatch(action(11), store);
============================================ */
export const asyncDispatch = (action, store) =>
  new Promise((resolve, reject) =>
    store.dispatch({ ...action, resolve, reject })
  );
