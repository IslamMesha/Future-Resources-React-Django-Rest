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
                                    <button onClick={() => this.editEmployeeDatail(emp)}>Edit</button>
                                    <button onClick={() => this.getEmployeeDatail(emp)}>Detail</button>
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

    getEmployeeDatail(emp) {
        console.log("getEmployeeDatail" + Object.keys(emp));
        axios.get('http://localhost:8000/employees/?page=' + this.state.pageNumber, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                this.setState({employees: response.data.results});
            });
    }

    editEmployeeDatail(emp) {
        console.log("editEmployeeDatail" + Object.keys(emp));
        axios.get('http://localhost:8000/employees/?page=' + this.state.pageNumber, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                this.setState({employees: response.data.results});
            });
    }

    deleteEmployee(emp) {
        axios.delete('http://127.0.0.1:8000/employees/' + emp.id + '/', {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                console.log(response);
                alert("Employee successfully deleted.")
            }).catch((error) => {
            console.log(error);
        });
        this.getEmployeeList();
    }

    getNextPage() {
        console.log("getNextPage");
        axios.get('http://localhost:8000/employees/?page=' + this.state.pageNumber, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                this.setState({employees: response.data.results});
            });
    }

    getPreviousPage() {
        console.log("getPreviousPage");
        axios.get('http://localhost:8000/employees/?page=' + this.state.pageNumber, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                this.setState({employees: response.data.results});
            });
    }

}

export default App;
