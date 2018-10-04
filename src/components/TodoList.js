import React, { Component } from 'react'
import { ListGroup} from 'react-bootstrap';
import Todo from './Todo.js'

export default class TodoList extends Component {
    constructor(){
        super();
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
    };
    deleteItem(e){
        this.props.deleteTodos(e.target.getAttribute('data-todo-id'));
    };
    editItem(e){
        this.props.editTodos(e.target.getAttribute('data-todo-id'), e.target.value);
    }
   render() {
      return (
         <ListGroup>
            {this.props.todos.map(todo =>
               <Todo key = {todo.id} {...todo} deleteItem={this.deleteItem} editItem={this.editItem}/>
            )}
         </ListGroup>
      )
   };
}