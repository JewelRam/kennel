
import React, { Component } from "react"
import Animal from "./animal"


export default class AnimalList extends Component {
    state = {
        animals: [
            {id: 1, name: "Scorpion", breed: "German Shepherd"},
            {id: 2, name: "Spider", breed: "Golden Doodle"},
            {id: 3, name: "Puppy", breed: "Jack Russel"},
            {id: 4, name: "Kitten", breed: "Calico"},
            {id: 5, name: "Unicorn", breed: "Horse"},
            {id: 6, name: "Bear", breed: "Black Bear"}
        ]
    }

    render() {
        return (
            <React.Fragment>
    
                <ul>
                {this.state.animals.map(animal => <Animal key = {animal.id} animal={animal} />)}
               </ul>
                
                </React.Fragment>
        )
    }
}
