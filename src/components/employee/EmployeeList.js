import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Brendan from "./FireEmployee.jpeg"

class EmployeeList extends Component {
    render() {
        return (
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
                                    className="card-link">Fire Employee</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList