import React, { Component } from 'react';

class AreaAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="ad-input" placeholder="Habit"  />
            </form>
        );
    }
}

export default AreaAddForm;