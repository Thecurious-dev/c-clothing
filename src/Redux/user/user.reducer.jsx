// create a variable of initial state
const INITIAL_STATE = {
    currentUser: null
}

// set the state to the initial state
const userReducer = (state = INITIAL_STATE, action) =>{
    // us
    switch (action.type) {
        case 'SET_CURRENT_USER':
            
            return{
                ...state,
                // we need to create the action
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;