import React from "react";
import NavItem from "./NavItem";


const NavBar = () => {

    return (
        <div className="container-fluid">
            <NavItem text="What's On" />
            <NavItem text="Coming Soon" />
            <NavItem text="Sign Up" />
            <NavItem text="Your Visit" />
            <NavItem text="Book Tickets" />
        </div>
    )
}

export default NavBar;