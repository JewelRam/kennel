import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import PropTypes from "prop-types"

 
const Employee = ({employee, children, checkOutEmployee}) => {
//     let employee = {}
//     // Check if the data is in `props.animal`
//   if (hasOwnProperty("employee")) {
//     employee = employee

//     // If not, data will be in `props.location.state.animal`
// } else {
//     employee = location.state.employee
// }

    return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {children}
                </h5>
                <p className="card-text">{employee.name}</p>
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${employee.id}`,
                        state: { employee: employee }
                    }}>
                    Details
                </Link>
                <a href="#" onClick={() => checkOutEmployee(employee.id)}>Delete</a>

            </div>
        </div>
    )
}
Employee.propTypes = {employee: PropTypes.object.isRequired}

export default Employee