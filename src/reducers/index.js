import {combineReducers} from 'redux';
import counterReducer from './counter_reducer';
import postReducer from './post_reducer';
// 通过combineReducers把多个reduce进行合并
const rootReduces=combineReducers({
  counter:counterReducer,
  post:postReducer
})
export default rootReduces;