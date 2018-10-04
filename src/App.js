import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './actions/actions';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Todo app</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Grid>
            <Row className="show-grid">
              <Col xsOffset={6} xs={12} md={6}>
                <AddTodo onAddClick={text => dispatch(addTodo(text))} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <TodoList todos={visibleTodos} deleteTodos={id => dispatch(deleteTodo(id))} editTodos={(id, text) => dispatch(editTodo(id, text))} />
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);
