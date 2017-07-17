import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import css from './styles/style.styl';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route component={App}/>
                <Route exact path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));