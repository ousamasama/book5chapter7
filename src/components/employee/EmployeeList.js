import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Brendan from "./FireEmployee.jpeg"

class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add New Employee
                    </button>
                </section>
                <section className="employees list">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={Brendan} className="icon--brendan" />
                                        {employee.name}
                                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                        <a href="#"
                                            onClick={() => this.props.fireEmployee(employee.id)}
                                            className="card-link">Fire Employee
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList