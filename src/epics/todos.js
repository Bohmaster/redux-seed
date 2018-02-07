import { ofType, pipe } from 'redux-observable'
import { delay, mapTo, mergeMap } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { store } from '../index'

import { FAKE_API_URL, fetchFake, setResponse } from '../services/todos'

const todoEpic = (action$) => {
    console.log(action$)
    return action$
        .ofType('ADD_TODO')
        .mergeMap(() => {
            store.dispatch({
                type: 'ADD_TODO_ASYNC_BEFORE',
                payload: {
                    isPending: true
                }
            })
            return Observable.from(fetchFake())
                .map((result) => {
                    store.dispatch({
                        type: 'ADD_TODO_ASYNC_AFTER',
                        payload: {
                            isPending: false
                        }
                    })
                    return setResponse(result)
                }
                )
        }
        )
}

export default todoEpic