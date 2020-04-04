import { handleActions } from 'redux-actions';
import produce from 'immer';

import { SET_VALUE, ADD_REQUEST_ID_ACTION, REMOVE_REQUEST_ID_ACTION } from './requestActions';

// ===== 초기 상태값
export const initialState = {
  requestIds: {}, // 현재 ajax 요청 중인 것들
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
        draft.requestIds[requestId] = state.requestIds[requestId]  ? state.requestIds[requestId] + 1 : 1;
      }),

    // # 리퀘스트 아이디 삭제
    [REMOVE_REQUEST_ID_ACTION]: (state, { payload: { requestId } }) =>
      produce(state, draft => {
        if(state.requestIds[requestId]){
          draft.requestIds[requestId] -= 1;
          if(draft.requestIds[requestId] <= 0) { // 숫자가 0이 될경우 삭제
            delete draft.requestIds[requestId];
          }
        }
      }),
  },
  initialState
);