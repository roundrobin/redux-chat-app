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


//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
import './src/css/main.scss';


import configureStore from './src/configureStore';

import {
    ChatThread
} from './src/components/ChatThread.jsx';

import DevTools from './src/DevTools.jsx';


//------------------------------------------------------------------------------
// Store creation
//------------------------------------------------------------------------------
const store = configureStore();

//------------------------------------------------------------------------------
// Render main view
//------------------------------------------------------------------------------
ReactDOM.render(
        <Provider store={store}>
            <div>
                <ChatThread/>
                <DevTools />
            </div>
        </Provider>,
    document.getElementById('root'));

console.log('App started', store.getState());


