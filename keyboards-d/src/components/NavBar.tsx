import React, { FunctionComponent } from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

export const NavBar:React.FC =  () => {
    // tab in between links
    return (
        <div> 
            <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/create-user">Create User</Link><br />
            <Link to="/create-task">Create Task</Link><br />

            </nav>
        </div>
    )
}

export default NavBar;
