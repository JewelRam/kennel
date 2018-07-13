
import React, { Component } from "react"
import Animal from "./animal"
import Database from "./ApiManager"


export default class AnimalList extends Component {
    state = {
        animals: [ ] 
    }
    componentDidMount () {
        Database.getAllAnimals()
        .then(animals => this.setState({ animals: animals }))
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
