import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animalList'
import LocationList from './locationList'
import EmployeeList from './employeeList'
import Animal from "./animal"
import Employee from "./employee"


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />
                <Route exact path="/animals" component={AnimalList} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <Animal animal={props.location.state.animal} />
                }} />
                <Route exact path="/employees" component={EmployeeList} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <Employee employee={props.location.state.employee} />
                }} />
            </React.Fragment>
        );
    }
}