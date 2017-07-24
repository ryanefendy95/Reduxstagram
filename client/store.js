import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = { posts, comments} ;

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store = createStore(
    rootReducer,
    defaultState,
    enhancers,
    // applyMiddleware(logger)
);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;