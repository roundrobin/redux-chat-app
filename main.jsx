
import {createStore, combineReducers} from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

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

const appStore = combineReducers({
    chatMesssages,
    rooms,
    visibilityFilter
});

const store = createStore(appStore);

console.log('App started', store.getState());
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


