import React, { Component } from "react"
import "./employee.css"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
        return (
            <section className="employee details">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <p>Employee Name: {employee.name}</p>
                        </h4>
                        <a href="#"
                            onClick={() => this.props.fireEmployee(employee.id)
                                .then(() => this.props.history.push("/employees"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}