import { createAction } from 'redux-actions';

// ===== 액션 타입(take에 사용)
export const SET_VALUE = 'request/SET_VALUE'; // key / value 형태로 데이터 셋팅
export const REQUEST = 'request/REQUEST'; // 요청 액션
export const ADD_REQUEST_ID_ACTION = 'request/ADD_REQUEST_ID_ACTION'; // ajax 요청 시 리퀘스트 아이디 추가
export const REMOVE_REQUEST_ID_ACTION = 'request/REMOVE_REQUEST_ID_ACTION'; // ajax 요청 완료 혹은 에러시 리퀘스트 아이디 삭제
export const TEST_REQUEST = 'request/TEST_REQUEST'; // 테스트 리퀘스트


// ===== 액션 생성 함수(dispatch시에 사용)
export const setValue = createAction(SET_VALUE);
export const requestAction = createAction(REQUEST);
export const addRequestIdAction = createAction(ADD_REQUEST_ID_ACTION);
export const removeRequestIdAction = createAction(REMOVE_REQUEST_ID_ACTION);
export const testRequest = createAction(TEST_REQUEST);
