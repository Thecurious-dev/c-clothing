// actions are functions that return objects

export const setCurrentUser = user =>({
    type: 'SET_CURRENT_USER',
    payload: user
})