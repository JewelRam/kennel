import React, { Component } from 'react'
import EmployeeList from "./employeeList"  // Import EmployeeList component
import KennelLocation from './locationList';
import AnimalList from "./animalList"
import OwnersList from './owners';


export default class Kennel extends Component {

    state = {
        employees: [
            {id: 1, name: "Woman Person" },
            {id: 2, name: "Man Person" },
            {id: 3, name: "Other Person" },
            {id: 4, name: "Some Guy" }
        ],
        locations: [
            {id: 1, name: "Nashville North" },
            {id: 2, name: "Nashville South" },
            {id: 3, name: "Nashville East"},
            {id: 4, name: "Nashville West"}
        ],
        animals: [
            
        ],
        owners: [
        
        ]
    }

    render() {
        return (
            <React.Fragment>
                <KennelLocation locations={this.state.locations} />
                {/* <EmployeeList employees={this.state.employees} /> */}
                <AnimalList animals={this.state.animals}owners={this.state.owners} />
                <OwnersList owners={this.state.owners} />
            </React.Fragment>
        );
    }
}