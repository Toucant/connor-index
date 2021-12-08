import React, { FunctionComponent } from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
type mystuff = PropTypes.InferProps<typeof PropTypes>
export const NavBar:React.FC =  () => {
    return (
        <div> 
            <nav>
            <Link to="/sign-up">Register</Link>
            <Link to="/create-task">Create Task</Link>
            <Link to="/sign-in">Login</Link>

            </nav>
        </div>
    )
}

export default NavBar;
