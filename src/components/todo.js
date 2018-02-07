import React, { Component } from 'react'
import ACTIONS from '../actions/todos'
import { connect } from 'react-redux'
import { store } from '../index'

class Todo extends Component {

    constructor(props) {
        console.log('!!!', props);
        super(props)
        this.state = {
            text: '',
            ready: false
        }
    }

    componentDidMount() {
        console.log('Component mounted')
    }
    
    addTodo = () => {
        this.props.add_todo({
            text: this.state.text,
            ready: true   
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
                {
                    this.props.isPending && !this.state.ready ? 
                        <h3>Cargando...</h3> :
                        <h3>Datos cargados</h3>
                }
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
                      this.props.todos.list.map((todo) => (
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
      todos: state.todos,
      isPending: state.isPending
    }
  }
  
const mapDispatchToProps = dispatch => {
     return {
       add_todo : (todo) => dispatch({
         type : 'ADD_TODO',
         payload: todo
       })
     }
   }
  

export default connect(mapStateToProps, mapDispatchToProps)(Todo)