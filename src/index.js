import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';

import todos from './reducers/todos'
import todoEpic from './epics/todos'

const epics = createEpicMiddleware(todoEpic)
const history = createHistory()
const rMiddleware = routerMiddleware(history)


export let store = createStore(
    combineReducers({
        todos: todos,
        router: routerReducer
      }),  
    applyMiddleware(epics, rMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

