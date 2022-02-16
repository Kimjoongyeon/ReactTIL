import React, { Component } from 'react';

class Area extends Component {
    handleModify = () => {
        this.props.onModify(this.props.area)
    };
    handleAdd = () => {
        this.props.onAdd(this.props.area.name)
    };
    handleDelete = () => {
        this.props.onDelete(this.props.area)
    };
    render() {
        const { name, count } = this.props.area;
        return (
            <li className="area">
                <span className="area-name">{name}</span>
                <span className="area-count">{count}</span>

                <button className="area-button area-increase" onClick={this.handleModify}>
                    <i className="fas fa-plus-square"></i>
                </button>

                <button className="area-button area-decrease" onClick={this.handleAdd}>
                    <i className="fas fa-minus-square"></i>
                </button>

                <button className="area-button area-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Area;