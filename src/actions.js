
export let sayActionCreator = function (message) {
    return {
        type: 'SAY',
        message
    }
}

export let asyncSayActionCreator_1 = function (message) {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'SAY',
                message
            })
        }, 2000)
    }
}
