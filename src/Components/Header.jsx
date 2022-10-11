import React from "react";
import NavBar from "./NavBar";
import cccLogo from "../images/CCC-Logo.png"

const Header = () => {
    return (
    <nav className="chevron">
        <li><img className="navbar-brand" src={cccLogo} /></li>
        <NavBar />
    </nav>
    );
}

export default Header;