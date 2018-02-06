const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': 
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.payload
                    }
                ]
            })
        default:
            return state    
    }
}

export default todos