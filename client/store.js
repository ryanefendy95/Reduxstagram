import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
// import userReducer from './reducers/user';

import comments from './data/comments';
import posts from './data/posts';


export default createStore(
    userReducer,
    applyMiddleware(
        logger(),
        promise()
    )
);