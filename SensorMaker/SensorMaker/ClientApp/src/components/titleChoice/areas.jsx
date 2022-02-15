import React, { Component } from 'react';
import Area from './area';
import AreaAddForm from './areaAddForm';

class Areas extends Component {
    handleModify = area => {
        this.props.onModify(area);
    };
    handleAdd = name => {
        this.props.onAdd(name);
    };
    handleDelete = area => {
        this.props.onDelete(area);
    };
    render() {
        return (
            <>
                <AreaAddForm onAdd={this.handleAdd} />
                <ul>
                    {this.props.areas.map(area => (
                        <Area
                            key={area.id}
                            area={area}
                            onModify={this.handleModify}
                            onAdd={this.handleAdd}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
            </>
        );
    }
}

export default Areas;