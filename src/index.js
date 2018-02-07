import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import './index.css';
import App from './App';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import todos from './reducers/todos'
import todoEpic from './epics/todos'

const epics = createEpicMiddleware(todoEpic)

let initialState = {
    todos: [
        {text: 'Default'}
    ],
    messages: [],
    isPending: false
}

export let store = createStore(
    todos,
    initialState,
    applyMiddleware(epics)
)

ReactDOM.render(
    <Provider store={store}>
       <Router>
         <Route path="/app" component={App} />
       </Router>
    </Provider>,
    document.getElementById('root')
);

