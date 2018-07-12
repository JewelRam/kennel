import React, { Component } from 'react'
import Employee from "./employee"
export default class EmployeeList extends Component {
    state = {
        employees: [
            {id: 1, name: "Woman Person" },
            {id: 2, name: "Man Person" },
            {id: 3, name: "Other Person" },
            {id: 4, name: "Some Guy" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                  {
                this.state.employees.map(employee => {
                 return <Employee key={employee.id} employee={employee} />
                })
            }
                </React.Fragment>
        )
    }
}