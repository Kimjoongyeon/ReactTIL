import React, { Component } from 'react';

class AreaAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="ad-input" placeholder="Habit"  />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default AreaAddForm;