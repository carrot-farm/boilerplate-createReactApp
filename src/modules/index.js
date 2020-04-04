import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import  { createRootSaga }  from '../utils/reduxSagaUtils';
import baseSagas from './base/baseSagas';
import requestSagas from './request/requestSagas';
import baseReducers from './base/baseReducers';
import requestReducers from './request/requestReducers';

// ===== rootSaga 생성
const rootSaga = createRootSaga(baseSagas, requestSagas);

// ===== reducers
const reducers = { 
  base : baseReducers, 
  request: requestReducers,
};

// ===== 스토어 생성
const makeStore = initialState => {
  // # 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();

  // # 미들웨어 합치기
  const middlewares = applyMiddleware(sagaMiddleware);

  // # 스토어 생성
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(middlewares),
  );

  // # 사가 실행
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default makeStore;
