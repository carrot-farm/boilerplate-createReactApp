import axios from 'axios';
import { put, take, select, call, fork } from 'redux-saga/effects';

import { 
  REQUEST,
  TEST_REQUEST,
  requestAction,
  addRequestIdAction, 
  removeRequestIdAction, 
} from './requestActions';


/* ==========================================
	worker
========================================== */
// ===== ajax 요청
export function* reqeustSaga({ method = 'GET', uri, fullUri, data }) {
  const { base: { config: { apiHost } } } = yield select();
  const url = fullUri || `${apiHost}/api${uri}`;
  const headers = {
    "Cache" : "no-cache",
    "Accept" : "application/json",
    "Content-Type" : "application/json",
    'Access-Control-Allow-Origin': '*',
  };
  const requestId = `${method}:${uri}`;
  
  try{
    yield put(addRequestIdAction({ requestId })); // 리퀘스트 아이디 추가
    // const res = yield call(axios, { url, headers, method, data, withCredentials: true, mode: 'no-cors' });
    const res = yield call(axios, { url, headers, method, data });
    // console.log('> reqeustSaga rul : ', url)
    // console.log('> reqeustSaga response : ', res.status, res.headers, res.data)
    yield put(removeRequestIdAction({ requestId })); // 리퀘스트 아이디 삭제
    return res;
  }catch(e){
    yield put(removeRequestIdAction({ requestId }));
    console.error('> ERROR \n', e);
  }
}


/* ==========================================
	watcher
========================================== */
// ===== 리퀘스트
function* watchRequest() {
  while(true) {
    const { payload } = yield take(REQUEST); 
    yield fork(reqeustSaga, payload);
  }
}

// ===== 테스트 리퀘스트
function* watchTestRequest() {
  while(true) {
    yield take(TEST_REQUEST); 

    // # GET TEST
    yield put(requestAction({ uri: '/test' })); 

    // # post test
    yield put(requestAction({ 
      method: 'POST', uri: '/test', data: { testValue: 'value' } 
    })); 
  }
}


/* ==========================================
	watcher 내보내기
========================================== */
export default {
  watchRequest,
  watchTestRequest
}