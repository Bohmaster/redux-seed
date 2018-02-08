import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';
import Todo from './components/todo';

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
      <div>
        <App />
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path="/todo" component={Todo}/>
              <Route exact path="/about" component={App}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    </Provider>,
    document.getElementById('root')
);

