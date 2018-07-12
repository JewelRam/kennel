
import React, { Component } from "react"
import Animal from "./animal"


export default class AnimalList extends Component {
    state = {
        animals: [
            {id: 1, name: "Scorpion"},
            {id: 2, name: "Spider"},
            {id: 3, name: "Puppy"},
            {id: 4, name: "Kitten"},
            {id: 5, name: "Unicorn"},
            {id: 6, name: "Bear"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                  {
                this.state.animals.map(animal => {
                 return <Animal key={animal.id} animal={animal} />
                })
            }
                </React.Fragment>
        )
    }
}