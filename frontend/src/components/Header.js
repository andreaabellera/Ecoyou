import React from "react";

import "../styles/Header.css";

import { 
    BrowserRouter, NavLink, Route, Switch, useLocation
  } from "react-router-dom";

function Header() 
{
    let location = useLocation();

    const checkIsTabUnderlined = (tabName) => 
    {
        console.log(location.pathname.split("/")[1]);
    };

    React.useEffect(() =>
    {
        
    }, [location]);

    return (
        <header>
            <NavLink to="/discover" className="header-item" activeClassName="active">
                Discover
            </NavLink>
            <NavLink to="/redeem" className="header-item" activeClassName="active">
                Redeem
            </NavLink>

            <NavLink to="/challenges" className="header-item" activeClassName="active">
                My challenges
            </NavLink>
            <NavLink to="/me" className="header-item" activeClassName="active">
                Me
            </NavLink>
        </header>
    );
}

export default Header;