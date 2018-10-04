import React, { Component, PropTypes } from 'react';
import { Button, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <FormGroup>
                <ControlLabel>Add todo item</ControlLabel>
                    <input type='text' ref='input' />
                    <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Add</Button>
                </FormGroup>
            </div>
        )
    }
    handleClick(e) {
        e.preventDefault();
        const node = this.refs.input
        if (node.value.trim()) {
            const text = node.value.trim()
            this.props.onAddClick(text)
            node.value = ''
        }
    }
}