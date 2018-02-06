import React, { Component } from 'react'
import ACTIONS from '../actions/todos'
import { connect } from 'react-redux'
import { store } from '../index'

class Todo extends Component {

    constructor(props) {
        console.log('!!!', props);
        super(props)
    }

    componentDidMount() {
        console.log('Component mounted')
    }
    
    addTodo = () => {
        this.props.dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                text: 'First todo'
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Todo!</h1>
                <h2>Lista:</h2>
                <ul>
                  {
                    this.props.todos.map(function(todo) {
                        <li>{todo}</li>
                    })    
                  }    
                </ul>

                
                <button onClick={this.addTodo}>Add</button>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('State map', state);
    return {
      todos: state.todos
    }
  }
  
// const mapDispatchToProps = dispatch => {
//     return {
//       addTodo : () => dispatch({
//         type : 'DESTROY_TODO'
//       })
//     }
//   }
  

export default connect(mapStateToProps)(Todo)