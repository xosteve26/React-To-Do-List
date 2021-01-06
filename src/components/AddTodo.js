import React from 'react'
import { Component } from 'react'


export class AddTodo extends Component {
    state= {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
        
    }
    onChange = (e) => this.setState({ [e.target.name]:e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div class='input-group mb-3'>
                    <input type="text" className="form-control" name='title' placeholder="Add ToDo List" value={this.state.title} onChange={this.onChange}/>{' '}
                    <div class='input-group-append'>
                        <button type="submit" className="btn btn-outline-primary">Add</button>
                    </div>
                    
                </div>
            </form>
        
    )
}
}

export default AddTodo;

