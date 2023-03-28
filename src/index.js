import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers/index'
import mysaga from'./sagas'
import  rootReducer  from './reducers';

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare)
)
sagaMiddleWare.run(mysaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App /> 
  </Provider>
);

