import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animalList'
import LocationList from './locationList'
import EmployeeList from './employeeList'


export default class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LocationList} />
                <Route path="/animals" component={AnimalList} />
                <Route path="/employees" component={EmployeeList} />
            </React.Fragment>
        )
    }
}