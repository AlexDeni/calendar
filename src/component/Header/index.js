import React from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../static/logo.jpg";

const Header = () => {

    return(
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <NavLink to="/" className="logo_link">
                            <img src={logo} alt=""/>
                        </NavLink>
                    </div>
                    <nav className="nav_header">
                        <NavLink exact={false} activeClassName='is-active' to="/">Home</NavLink>
                        <NavLink activeClassName='is-active' to="/about">About us</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export { Header }