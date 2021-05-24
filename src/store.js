import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReduces from './reducers/index'
const store = createStore(
    rootReduces, /* preloadedState, */
    compose(
        applyMiddleware(...[thunk]), //需要使用的中间件数组
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
); //创建一个store
// console.log(store);
// console.log(store.getState()); //{count:1}
export default store;