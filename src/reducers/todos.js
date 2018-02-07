import
    {
        ADD_TODO,
        ADD_TODO_ASYNC,
        ADD_TODO_ASYNC_AFTER,
        ADD_TODO_ASYNC_BEFORE
    } 
from '../actions/todos'

export const todos = (state = {list: [], posts: []}, action) => {
    console.log(state, action)
    switch (action.type) {
        case ADD_TODO:
            console.log('ADD_TODO', action, state)
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
        case ADD_TODO_ASYNC:
            console.log('ADD_TODO_ASYNC', state, action)
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case ADD_TODO_ASYNC_BEFORE:
            console.log('ADD_TODO_ASYNC_BEFORE', state, action)
            return {
                ...state, ...action.payload
            }
        case ADD_TODO_ASYNC_AFTER:
            console.log('ADD_TODO_ASYNC_AFTER', state, action)
            return {
                ...state, ...action.payload
            }         
        default:
            return state    
    }
}

export default todos