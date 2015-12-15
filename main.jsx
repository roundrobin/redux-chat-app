
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

import {
    chatMesssages,
    rooms,
    visibilityFilter
} from './src/stores';


import {
    Replybox,
    ChatThread
} from './src/components.jsx';


//------------------------------------------------------------------------------
// Store creation
//------------------------------------------------------------------------------
const appStore = combineReducers({
    chatMesssages,
    rooms,
    visibilityFilter
});

const store = createStore(appStore);

//------------------------------------------------------------------------------
// Render main view
//------------------------------------------------------------------------------
const render = ()=> {
    ReactDOM.render(
        <Provider store={store}>
            <ChatThread/>
        </Provider>,
        document.getElementById('root'))
}

store.subscribe(()=>{
    render();
});

render();

console.log('App started', store.getState());


