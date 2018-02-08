import { ofType, pipe } from 'redux-observable'
import { delay, mapTo, mergeMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { store } from '../index'

import {TodoService} from '../services/todos'

const Todo = new TodoService()

const todoEpic = (action$) => {
    // console.log("TODO EPIC ACTION", action$)
    return action$
        .ofType('ADD_TODO')
        .mergeMap(() => {
            console.log("TODO EPIC ACTION", action$)
            store.dispatch({
                type: 'ADD_TODO_ASYNC_BEFORE',
                payload: {
                    isPending: true
                }
            })
            return Observable.from(Todo.fetchFake())
                .map((result) => {
                    console.log('RESULLLLLLLLLT', result)
                    store.dispatch({
                        type: 'ADD_TODO_ASYNC_AFTER',
                        payload: {
                            isPending: false
                        }
                    })
                    return Todo.setResponse(result)
                }
                )
        }
        )
}

export default todoEpic