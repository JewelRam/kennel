
import React, { Component } from "react"
import Animal from "./animal"
import Database from "./ApiManager"


export default class AnimalList extends Component {
    state = {
        animals: [],
        animalToEdit: { }
    }
    checkOutAnimal = (animalId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of animals
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/animals")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(animalList => {
                this.setState({
                    animals: animalList
                })
            })
    }
        handleFieldChange = (event) => {
            const stateToChange = this.state.animalToEdit
            stateToChange[event.target.id] = event.target.value
            this.setState({animalToEdit: stateToChange})
        }
    
    handleEdit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5002/animals/${this.state.animalToEdit.id}`, {
            method: "PUT",
            body: JSON.stringify(this.state.animalToEdit), 
            headers: {
                "Content-Type": "application/json"
            }
        }) .then( () => {return fetch("http://localhost:5002/animals")})
        .then(a => a.json())
        .then(animalList => {
            this.setState({
                animals: animalList
            })
        })  
    }

    EditAnimal = (animalId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`)
            
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(animalList => {
                this.setState({
                    animalToEdit: animalList
                })
console.log(this.state)

            })
    }
    render() {
        return (
            <form onSubmit={this.handleEdit}>
                <h1 className="h3 mb-3 font-weight-normal">Add New Animal</h1>
                <label htmlFor="Add New Animal">
                    Name:
                </label>
                <input onChange={this.handleFieldChange} type="text"
                    id="name"
                    placeholder="Name Of Pet"
                    required="" autoFocus="" />
                <label htmlFor="name">
                    Breed:
                </label>
                <input onChange={this.handleFieldChange} type="text"
                    id="breed"
                    placeholder="Breed"
                    required="" />
                <button type="submit">
                    Sign in
                </button>
            </form>
        )
    }

    componentDidMount() {
        Database.getAllAnimals()
            .then(animals => this.setState({ animals: animals }))
    }

    render() {
        return (
            <React.Fragment>

                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id}
                            animal={animal}
                            checkOutAnimal={this.checkOutAnimal}
                            EditAnimal={this.EditAnimal}
                        />
                    )
                }
                {
                    (
                        <form onSubmit={this.handleEdit}>
                            <h1 className="h3 mb-3 font-weight-normal">Add New Animal</h1>
                            <label htmlFor="inputEmail">
                                Name:
                </label>
                            <input onChange={this.handleFieldChange} type="text"
                                id="name"
                                placeholder="Name Of Pet"
                                value= {this.state.animalToEdit.name}
                                required="" autoFocus="" />
                            <label htmlFor="inputPassword">
                                Breed:
                </label>
                            <input onChange={this.handleFieldChange} type="text"
                                id="breed"
                                placeholder="Breed"
                                value= {this.state.animalToEdit.breed}
                                required="" />
                            <button type="submit">
                                Edit Animal
                </button>
                        </form>
                    )
                }
            </React.Fragment>
        )
    }
}
