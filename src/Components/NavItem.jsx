import React from "react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
    return (
        <Link to={props.linkTo} className="nav-item">{props.text}</Link>
    )
}

export default NavItem;