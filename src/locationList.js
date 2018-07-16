import React, { Component } from 'react'
import Location from "./location"
import Database from "./ApiManager"

export default class LocationList extends Component {
    state = {
        locations: []

    }
    checkOutLocation = (locationId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/locations/${locationId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of animals
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/locations")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
            .then(locationList => {
                this.setState({
                    locations: locationList
                })
            })
    }

    componentDidMount() {
        Database.getAllLocations()
            .then(locations => this.setState({ locations: locations }))
    }

    render() {
        return (
            <React.Fragment>
                {
                this.state.locations.map(location =>
                    <Location key={location.id}
                            location={location}
                            checkOutLocation={this.checkOutLocation}
                    />
                )
            }
            </React.Fragment>
        )
    }
}