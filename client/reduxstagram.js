import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={Main}/>
            <Route exact path="/" component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));