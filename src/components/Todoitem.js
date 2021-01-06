import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trash from 'F:/react-todo/src/components/Trash'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            background:'#100e17',
            padding:'10px',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none',
            border:'1px #FF8C00 solid ',
            color:'white',

        }
    }
    f1() {
        {this.props.delTodo.bind(this,this.props.todo.id)}
    }

    f2() {
        
    }

    render() {
        return (
           
            <div style={this.getStyle()}>
               <p> 
                <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)} /> {' '}          
                {this.props.todo.title}
                <button onClick={this.props.delTodo.bind(this,this.props.todo.id)} name="{this.props.todo.title}" type="button" class="btn btn-outline-danger btn float-right btn-sm">Delete</button>
                
                
                </p>          
            </div>
        )
    }
}


//PropTypes
Todoitem.protoType={
    todo: PropTypes.object.isRequired
}


export default Todoitem
