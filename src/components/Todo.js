import React, { Component } from 'react';
import { Button, ListGroupItem, ButtonGroup } from 'react-bootstrap';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = { showEditInput: false, text: "" };
        this.delete = this.delete.bind(this);
        this.toggleShowEditInput = this.toggleShowEditInput.bind(this);
        this.changeTodoContent = this.changeTodoContent.bind(this);
    }
    delete(e) {
        this.props.deleteItem(e);
    }
    toggleShowEditInput(e) {
        if (this.state.showEditInput) {
        }
        this.showEditInput = !this.showEditInput;
        this.setState({ showEditInput: this.showEditInput });
    }
    changeTodoContent(e) {
        this.props.editItem(e);
    }
    render() {
        return (
            <ListGroupItem>
                {this.props.text}
                <ButtonGroup className="push-right">
                    <Button bsStyle="danger" bsSize="xsmall" data-todo-id={this.props.id} onClick={this.delete}>Delete</Button>
                    <Button bsStyle="warning" bsSize="xsmall" data-todo-id={this.props.id} onClick={this.toggleShowEditInput}>{this.state.showEditInput ? 'Save' : 'Edit'}</Button>
                </ButtonGroup>
                {this.state.showEditInput ? <input data-todo-id={this.props.id} onChange={this.changeTodoContent} value={this.props.text} /> : null}
            </ListGroupItem>
        )
    };
}