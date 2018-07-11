import React, { Component } from 'react'


export default class OwnersList extends Component {
        render() {
            return (
                <React.Fragment>
                {
                    this.props.owners.map(owner =>
                        <div>
                            {owner.id}
                            {owner.name}
                        </div>
                    )
                }
                </React.Fragment>
            )
        }
    }