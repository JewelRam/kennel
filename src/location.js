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
                <Link className="card-link"
                    to={{
                        pathname: `/locations/${props.location.id}`,
                        state: { location: props.location }
                    }}>
                    Details
                </Link>
                <a href="#" onClick={() => props.checkOutLocation(props.location.id)}>Delete</a>
            </div>
        </div>
    )
}