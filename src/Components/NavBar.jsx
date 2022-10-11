import React from "react";
import NavItem from "./NavItem";


const NavBar = () => {

    return (
        <div className="container-fluid">
            <NavItem text="What's On" linkTo="/" />
            <NavItem text="Coming Soon" linkTo="/schedule" />
            <NavItem text="Sign Up" linkTo="/signup" />
            <NavItem text="Your Visit" />
            <NavItem text="Book Tickets" />
        </div>
    )
}

export default NavBar;