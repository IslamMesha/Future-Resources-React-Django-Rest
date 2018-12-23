import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            pageNumber: 1
        }
    }

    componentDidMount() {
        this.getEmployeeList()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p> My First React App </p>
                    <table>
                        <tbody>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Middle Name</td>
                            <td>Options</td>
                        </tr>
                        {this.state.employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.first_name}</td>
                                <td>{emp.middle_name}</td>
                                <td>{emp.last_name}</td>
                                <td>
                                    <button onClick={this.editEmployeeDatail}>Edit</button>
                                    <button onClick={this.getEmployeeDatail}>Detail</button>
                                    <button onClick={() => this.deleteEmployee(emp)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div>
                        <button onClick={this.getNextPage}>Next</button>
                        <button onClick={this.getPreviousPage}>Previous</button>
                    </div>
                </header>
            </div>
        );
    }


    getEmployeeList() {
        axios.get('http://localhost:8000/employees/?page=' + this.state.pageNumber, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                this.setState({employees: response.data.results});
            });
    }

    getEmployeeDatail() {
        console.log("getEmployeeDatail")
    }

    getNextPage() {
        console.log("getNextPage")
    }

    getPreviousPage() {
        console.log("getPreviousPage")
    }

    editEmployeeDatail() {
        console.log("editEmployeeDatail")
    }

    deleteEmployee(emp) {
        console.log("deleteEmployee" + Object.keys(emp))
    }
}

export default App;
