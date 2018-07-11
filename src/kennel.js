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
            {id: 1, name: "Scorpion"},
            {id: 2, name: "Spider"},
            {id: 3, name: "Puppy"},
            {id: 4, name: "Kitten"},
            {id: 5, name: "Unicorn"},
            {id: 6, name: "Bear"}
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ],
        relationships: [
            {id: 1, animalId: 5, personId: 3},
            {id: 2, animalId: 1, personId: 1},
            {id: 3, animalId: 4, personId: 5}
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