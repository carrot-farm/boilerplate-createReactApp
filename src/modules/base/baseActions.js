import { createAction } from 'redux-actions';

// ===== 액션 타입
export const SET_VALUE = 'base/SET_VALUE'; // key / value 형태로 데이터 셋팅
export const ADD_TASKS = 'base/ADD_TASKS'; // 태스크 동적 추가
export const GET_INITIALIZE_DATA = 'base/GET_INITIALIZE_DATA'; // 초기 데이터 가져오기
export const RUN_SAGAS_ACTION = 'base/RUN_SAGAS_ACTION'; // 외부에서 사가를 직접 호출
export const INITIALIZE_ACTION = 'base/SET_INITIALIZE_ACTION'; // 초기화
export const ADD_REQUEST_ID_ACTION = 'base/ADD_REQUEST_ID_ACTION'; // ajax 요청 시 리퀘스트 아이디 추가
export const REMOVE_REQUEST_ID_ACTION = 'base/REMOVE_REQUEST_ID_ACTION'; // ajax 요청 완료 혹은 에러시 리퀘스트 아이디 삭제

export const INCREAMENT = 'base/INCREAMENT'; // test
export const TEST_CALL_ACTION = 'base/TEST_CALL_ACTION'; // test2

// ===== 액션 생성 함수
export const setValue = createAction(SET_VALUE);
export const addTasks = createAction(ADD_TASKS);
export const getInitializeData = createAction(GET_INITIALIZE_DATA);
export const runSagasAction = createAction(RUN_SAGAS_ACTION);
export const initializeAction = createAction(INITIALIZE_ACTION);
export const addRequestIdAction = createAction(ADD_REQUEST_ID_ACTION);
export const removeRequestIdAction = createAction(REMOVE_REQUEST_ID_ACTION);



export const increament = createAction(INCREAMENT);
export const testCallAction = createAction(TEST_CALL_ACTION);
