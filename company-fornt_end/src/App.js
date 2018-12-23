import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/employees/?page=1', {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                debugger;
                this.setState({employees: response.data.results});
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p> My First React App </p>
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Middle Name</td>
                        </tr>
                        {this.state.employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.middle_name}</td>
                                <td>{emp.last_name}</td>
                            </tr>
                        ))}
                    </table>
                </header>
            </div>
        );
    }
}

export default App;
