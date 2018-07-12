import React, { Component } from 'react'
import Location from "./location"

export default class LocationList extends Component {
    state = {
        locations: [
            {id: 1, name: "Nashville North", adress: "110 Something Dr." },
            {id: 2, name: "Nashville South", adress: "230 Park Dr." },
            {id: 3, name: "Nashville East", adress: "4002 Road Rd."},
            {id: 4, name: "Nashville West", adress: "235 Court Ct."} 
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