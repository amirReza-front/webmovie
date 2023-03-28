import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
 import Axios from '../api'
import types from '../types';
function* fetchIsTrendWeekly(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
      yield put({type: types.movieList.IsTrendWeekly.SUCCEEDED, payload: res.data.Item});
   } catch (e) {
      yield put({type: types.movieList.IsTrendWeekly.FAILED, message: e.message});
   }
}
function* fetchIsIsUpComming(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
      yield put({type: types.movieList.IsUpComming.SUCCEEDED, payload: res.data.Item});
   } catch (e) {
      yield put({type:types.movieList.IsUpComming.FAILED, message: e.message});
   }
}
function* fetchPostIDRelative(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
       yield put({type: types.movieList.PostIDRelative.SUCCEEDED, payload: res.data.Item});
   } catch (e) {
       yield put({type:types.movieList.PostIDRelative.FAILED, message: e.message});
   }
}
function* fetchHomeInfo(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
      if(action.moreBtn){
         yield put({type:types.homeinfo.GETMORE , payload: res.data.Item ? res.data.Item : []});
      }else{
         yield put({type: action.grid ? "Grid_SUCCEEDED":types.homeinfo.SUCCEEDED , payload: res.data.Item ? res.data.Item : []});
      }
       
   } catch (e) {
       yield put({type:types.homeinfo.FAILED, message: e.message});
   }
}
function* fetchListPage(action) {
   const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
   try {
      if(action.moreBtn){
         yield put({type:"LIST_GET_MORE" , payload: res.data.Item ? res.data.Item : []});
      }else{
         
         yield put({type:res.data.Item ? types.list.SUCCEEDED : "NO_RESULT" , payload:res.data.Item ? res.data.Item : []});
      }
     
         
   } catch (e) {
         yield put({type:types.list.FAILED, message: e.message});
   }
}
function* fetchSinglePageInfo(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Get","post",action.data));
       yield put({type: types.singlePage.SUCCEEDED, payload: res.data.Item[0]});
   } catch (e) {
       yield put({type:types.singlePage.FAILED, message: e.message});
   }
}
function* fetchGeners(action) {
   try {
      const res = yield call(Axios.bind(this,"Post/Geners","get",""));
      yield put({type: types.Geners.SUCCEEDED, payload: res.data.Item});
   } catch (e) {
      yield put({type:types.Geners, message: e.message});
   }
}




function* mySaga() {

  yield takeEvery(types.movieList.IsTrendWeekly.REQUESTED,fetchIsTrendWeekly);
  yield takeEvery(types.movieList.IsUpComming.REQUESTED, fetchIsIsUpComming);
  yield takeEvery(types.movieList.PostIDRelative.REQUESTED, fetchPostIDRelative);
  yield takeEvery(types.homeinfo.REQUESTED, fetchHomeInfo);
  yield takeEvery(types.list.REQUESTED, fetchListPage);
  yield takeEvery(types.singlePage.REQUESTED, fetchSinglePageInfo);
  yield takeEvery(types.Geners.REQUESTED, fetchGeners);
}




export default mySaga;