import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
    return (
        <Link to={props.linkTo} className="nav-item"><li>
            <a>{props.text}</a>
            </li></Link>
    )
}

export default NavItem;