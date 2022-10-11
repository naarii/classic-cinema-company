import React from "react";

const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a>{props.text}</a>;
        </li>
    )
}

export default NavItem;