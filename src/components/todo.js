import React, { Component } from 'react'
import ACTIONS from '../actions/todos'
import { connect } from 'react-redux'
import { store } from '../index'

class Todo extends Component {

    constructor(props) {
        console.log('!!!', props);
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        console.log('Component mounted')
    }
    
    addTodo = () => {
        this.props.dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                text: this.state.text
            }
        })
    }

    changeValue = (evt) => {
        this.setState({
            text: evt.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>Todo!</h1>
                <h2>Lista:</h2>
                <form>
                    <input
                        value={this.state.text}
                        onChange={(evt) => {
                            this.changeValue(evt)
                        }}>
                    </input>
                </form>
                <ul>
                  {
                      this.props.todos.map((todo) => (
                        <li>{todo.text}</li>
                      ))
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