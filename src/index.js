import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore,compose,applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
// import axios from 'axios';
// import thunk from 'redux-thunk'
import countAddAction from './actions/counter_action';
// import loadPosts from './actions/post_action';
store.dispatch(countAddAction);
// store.dispatch(loadPosts);
 

// const counterReducer=function(state={count:1},action){
//   console.log(action)
//   switch(action.type){
//     case 'COUNT_ADD':
//       return{
//         ...state,count:state.count+1
//       }
//     default:
//       return state;
//   }
// }
// const postReducer=function(state={list:[{title:'你好！'}]},action){
//   console.log(action)
//   switch(action.type){
//     case 'LOAD_POSTS':
//       return{
//         ...state,list:action.payload
//       }
//     default:
//       return state;
//   }
// }
// 通过combineReducers把多个reduce进行合并
// const rootReduces=combineReducers({
//   counter:counterReducer,
//   post:postReducer
// })


// const store=createStore(counterReducer) //创建一个store
// const store = createStore(
//   rootReduces, /* preloadedState, */
//   compose(
//     applyMiddleware(...[thunk]), //需要使用的中间件数组
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );//创建一个store
// console.log(store);
// console.log(store.getState()); //{count:1}


//如果需要改变一个reducer的值 需要使用dispatch派发一个action

//action需要两个参数
// type 通过type区分是对state做什么操作
// payload 传递的数据
// 
// store.dispatch({
//   type:'COUNT_ADD',
//   payload:{}
// })
// store.dispatch(async function(dispatch){
//   const res=await getPostsRequest();
//   console.log("res:"+res.data);
//   dispatch({
//     type:'LOAD_POSTS',
//     payload:res.data
//   })
// })
//通过provider把redux和react连接，store传递到react项目中
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
