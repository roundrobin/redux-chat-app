export let sayActionCreator = function (message) {
    return {
        type: 'SAY',
        message
    }
}

export let addMessage = function (text) {
    return {
        type: 'ADD_MSG',
        text: text,
        username: 'roundrobin',
        date: +new Date()
    }
}

export let addRandomMember = function (text) {
    return {
        type: 'ADD_MEMBER',
        username: 'user-'+(Math.floor(Math.random()*1000))
    }
}

export let asyncSayActionCreator = function (message) {
    console.log('Yooooo 1');
    return dispatch => {
        console.log('toooo')
        setTimeout(() => {
          // Yay! Can invoke sync or async actions with `dispatch`
          dispatch({
                type: 'ADD_MSG',
                text: message,
                username: 'roundrobin',
                date: +new Date()
            });
        }, 1000);
      };
}
