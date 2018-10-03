import React, { Component } from 'react';

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
        if(this.state.showEditInput){
        }
        this.showEditInput = !this.showEditInput;
        this.setState({ showEditInput: this.showEditInput });
    }
    changeTodoContent(e) {
        this.props.editItem(e);
    }
    render() {
        return (
            <li>
                {this.props.text}
                <button data-todo-id={this.props.id} onClick={this.delete}>Delete</button>
                <button data-todo-id={this.props.id} onClick={this.toggleShowEditInput}>{this.state.showEditInput ? 'Save' : 'Edit'}</button>
                {this.state.showEditInput ? <input data-todo-id={this.props.id} onChange={this.changeTodoContent} value={this.props.text}/> : null}
            </li>
        )
    };
}