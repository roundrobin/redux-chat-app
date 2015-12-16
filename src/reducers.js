import {createStore, combineReducers} from 'redux';
import { routeReducer } from 'redux-simple-router'

//------------------------------------------------------------------------------
// Chat message store
//------------------------------------------------------------------------------
let memberId = 0;
const members = (state = {}, action)=>{
    switch(action.type){
        case 'ADD_MEMBER':
            return [
            ...state,
            {
                id: memberId++,
                username: action.username
            }];
        default:
            return state
    }
}

//------------------------------------------------------------------------------
// Chat message store
//------------------------------------------------------------------------------
let messageId = 0;

let initialState = [];

for(let i=0;i< 150;i++){
    initialState.push({
        id: messageId++,
        text: 'message-'+messageId,
        username: 'nelson',
        date: +new Date(),
        upvotes: 0
    });
}

const chatMesssages = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_MSG':
            return [
            ...state,
            {
                id: messageId++,
                text: action.text,
                username: action.username,
                date: action.date,
                upvotes: 0
            }];
        default:
            return state
    }
}

//------------------------------------------------------------------------------
// Rooms store
//------------------------------------------------------------------------------
let roomId = 0;
const rooms = (state = [], action)=>{
    switch(action.type){
        case 'ADD_ROOM':
            return [
            ...state,
            {
                id: roomId++,
                title: action.title,
                isPrivate: false
            }];
        default:
            return state
    }
}
//------------------------------------------------------------------------------
// Visibilty store
//------------------------------------------------------------------------------
const visibilityFilter = (state = false, action)=>{
    switch(action.type){
        case 'TOGGLE':
            return action.filter;
        default:
            return state
    }
}


const rootReducer = combineReducers({
    chatMesssages,
    rooms,
    visibilityFilter,
    members,
    routing: routeReducer
});

export default rootReducer;



