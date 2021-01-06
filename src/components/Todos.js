
import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
import Trash from 'F:/react-todo/src/components/Trash'


class Todos extends Component{

        render(){
            
            return this.props.todos.map(
                (todo)=>(
                <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
                
            ))
            

        }
    }
//PropTypes
Todos.protoType={
    todos: PropTypes.array.isRequired
}

export default Todos;
