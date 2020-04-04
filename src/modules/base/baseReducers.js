import { handleActions } from 'redux-actions';
import produce from 'immer';

import { SET_VALUE, ADD_REQUEST_ID_ACTION, REMOVE_REQUEST_ID_ACTION } from './baseActions';

// ===== 초기 상태값
export const initialState = {
  loadedPages: [], // 로드된 페이지 정보. 최대 10개 보관
  requestIds: {}, // 현재 ajax 요청 중인 것들
  config: { // 글로벌 설정
    host: '',
  },
  num: 0, // 테스트에 사용될 숫자
};

// ===== 리듀서
export default handleActions(
  {
    // # key / value 형태로 데이터 셋팅
    [SET_VALUE]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft[key] = value;
      }),

    // # 리퀘스트 아이디 추가
    [ADD_REQUEST_ID_ACTION]: (state, { payload: { requestId } }) =>
      produce(state, draft => {
        if(!state.requestIds[requestId]){
          draft.requestIds[requestId] = requestId;
        }
      }),

    // # 리퀘스트 아이디 삭제
    [REMOVE_REQUEST_ID_ACTION]: (state, { payload: { requestId } }) =>
    produce(state, draft => {
      if(state.requestIds[requestId]){
        delete draft.requestIds[requestId];
      }
    }),
  },
  initialState
);