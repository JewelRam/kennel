import React, { Component } from 'react'
import Location from "./location"

export default class LocationList extends Component {
    state = {
        locations: [
            {id: 1, name: "Nashville North" },
            {id: 2, name: "Nashville South" },
            {id: 3, name: "Nashville East"},
            {id: 4, name: "Nashville West"} 
        ]
    }

    render() {
        return (
            <React.Fragment>
                  {
                this.state.locations.map(location => {
                 return <Location key={location.id} location={location} />
                })
            }
                </React.Fragment>
        )
    }
}