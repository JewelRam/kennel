import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.location.name}
                </h5>
                <p className="card-text">{props.location.adress}</p>
                {
                    <Link to={`/locations/${props.location.id}`}
                          className="card-link">
                        Details
                    </Link>
                }
            </div>
        </div>
    )
}