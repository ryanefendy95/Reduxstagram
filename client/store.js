import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = { posts, comments} ;

let store = createStore(
    rootReducer,
    defaultState
    // applyMiddleware(logger)
)

export default store;