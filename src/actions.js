
export let sayActionCreator = function (message) {
    return {
        type: 'SAY',
        message
    }
}