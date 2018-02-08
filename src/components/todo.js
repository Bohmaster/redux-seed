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

        this.state.text = "";
    }

    changeValue = (evt) => {
        this.setState({
            text: evt.target.value
        })
    }
    
    render() {
        return (
            <div style={{margin: '0 auto', position: 'relative', textAlign: 'center'}}>
                
                <h1>Todos!</h1>
                <div className="col-md-6">
                    <h2>Lista:</h2>

                    <div className="row">
                      <input
                          value={this.state.text}
                          onChange={(evt) => {
                              this.changeValue(evt)
                          }}>
                      </input>
                      <button onClick={this.addTodo}>Add</button> 
                    </div>
                  
                    <div className="row">
                      <ul style={{width: '600px'}}>
                        {
                          this.props.todos.list.map((todo) => (
                            <li>{todo.text}</li>
                          ))
                        }    
                      </ul>
                    </div>
                </div>
                   
                <div className="col-md-6">
                    <h1>Posts!</h1>
                    {
                        this.props.isPending && !this.state.ready ? 
                          <h3>Cargando...</h3> :
                          <h3>Datos cargados</h3>
                    }
                      
                    <ul style={{width: '600px'}}>
                      {
                          this.props.todos.posts.map((post) => (
                            <li>{post.title}</li>
                          ))
                      }    
                    </ul>
                </div> 

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('State map', state);
    return {
      todos: state.todos,
      isPending: state.todos.isPending
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