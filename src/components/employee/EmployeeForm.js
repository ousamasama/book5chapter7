import React, { Component } from "react"
import "./employee.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewEmployee = evt => {
        evt.preventDefault()
        // if (this.state.employee === "") {
        //     window.alert("Please select a caretaker")
        // } else {
            const employee = {
                name: this.state.employee
            }

            // Create the employee and redirect user to employee list
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"))
        // }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employee">Employee name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employee"
                               placeholder="Employee name" />
                    </div>
                    {/* make location */}
                    {/* <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder="Breed" />
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}