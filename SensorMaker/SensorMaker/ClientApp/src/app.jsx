import React, { Component } from 'react';
import './app.css';
import Areas from './components/titleChoice/areas';
//import AreaInformation from './components/titleChoice/AreaInformation.jsx';

class App extends Component {
    state = {
        areas: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ],
    };
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
    render() {
        return (
            <>
                <Areas
                    areas={this.state.areas}
                    onModify={this.handleModify}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                />
            </>
        );
    }
}
export default App;