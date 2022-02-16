import React, { Component } from 'react';
import './app.css';
import AreaInformation from './components/titleChoice/AreaInformation';

class App extends Component {
    /*
    handleModify = area => {
        const areas = [...this.state.areas];
        const index = areas.indexOf(area);
        areas[index].count++;
        this.setState({ areas });
    };
    handleDelete = area => {
        const areas = this.state.areas.filter(item => item.id !== area.id);
        this.setState({ areas });
    };
    handleAdd = name => {
        const areas = [...this.state.areas, { id: Date.now(), name: name, node: 0 }];
        this.setState({ areas });
    };
    */
    render() {
        return (
            <>
                <AreaInformation
                    //onModify={this.handleModify}
                    //onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                />
            </>
        );
    }
}
export default App;