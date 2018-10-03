import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './actions/actions';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import './App.css';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} deleteTodos={id => dispatch(deleteTodo(id))} editTodos={(id, text) => dispatch(editTodo(id, text))}/>
      </div>
    );
  }
}

function select(state){
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);
