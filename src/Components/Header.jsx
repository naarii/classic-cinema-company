import React from "react";
import NavBar from "./NavBar";
import cccLogo from "../images/CCC-Logo.png"

const Header = () => {
    return (
    <nav className="chevron">
        <img className="navbar-brand" src={cccLogo} alt="ccc_logo" />
        <NavBar />
    </nav>
    );
}

export default Header;