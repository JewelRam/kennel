import React, { Component } from 'react'
import EmployeeList from "./employeeList"  // Import EmployeeList component
import KennelLocation from './locationList';


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <EmployeeList />
                <KennelLocation />
            </div>
        );
    }
}