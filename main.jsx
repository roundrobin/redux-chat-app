//
//
// Based on the 30 part video tutorial:
// https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree
//
//
//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import {createStore, combineReducers} from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
import './src/css/main.scss';


import configureStore from './src/configureStore';

import App from './src/components/App.jsx';
import {
    Home,
    Member,
    Room,
    Foo
} from './src/components/SmallViews.jsx';


//------------------------------------------------------------------------------
// Store creation
//------------------------------------------------------------------------------
const store = configureStore();
const history = createHistory()

syncReduxAndRouter(history, store);

//------------------------------------------------------------------------------
// Render main view
//------------------------------------------------------------------------------
ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
          <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="foo" component={Foo}/>
              <Route path="member/:username" component={Member}/>
              <Route path="room/:roomSlug" component={Room}/>
          </Route>
        </Router>
    </Provider>,
    document.getElementById('root'));

console.log('App started', store.getState());


