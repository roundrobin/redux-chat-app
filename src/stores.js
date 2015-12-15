
let messageId = 0;
export const chatMesssages = (state = [], action)=>{
    switch(action.type){
        case 'ADD_MSG':
            return [
            ...state,
            {
                id: messageId++,
                text: action.text,
                upvotes: 0
            }];
        default:
            return state
    }
}


let roomId = 0;
export const rooms = (state = [], action)=>{
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

export const visibilityFilter = (state = false, action)=>{
    switch(action.type){
        case 'TOGGLE':
            return action.filter;
        default:
            return state
    }
}
