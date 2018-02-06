const todos = (state = {}, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_TODO': 
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        ...action.payload
                    }
                ]
            })
        default:
            return state    
    }
}

export default todos