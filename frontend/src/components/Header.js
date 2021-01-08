import React from "react";

import "../styles/Header.css";

import ecoyouLogo from "../resources/ecoyou.png";

import HeaderDiscoverIcon from "../resources/header-discover.png";
import HeaderRedeemIcon from "../resources/header-redeem.png";
import HeaderChallengesIcon from "../resources/header-challenges.png";
import HeaderMeIcon from "../resources/header-me.png";

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
                <img src={HeaderDiscoverIcon} className="tab-icon" />
                Discover
            </NavLink>
            <NavLink to="/redeem" className="header-item" activeClassName="active">
                <img src={HeaderRedeemIcon} className="tab-icon" />
                Redeem
            </NavLink>
            <div className="logo-container"> 
                <img src={ecoyouLogo} className="header-logo" />
                <span>The change starts with you</span>
            </div>
            <NavLink to="/challenges" className="header-item" activeClassName="active">
                <img src={HeaderChallengesIcon} className="tab-icon" />
                My challenges
            </NavLink>
            <NavLink to="/me" className="header-item" activeClassName="active">
                <img src={HeaderMeIcon} className="tab-icon" />
                Me
            </NavLink>
        </header>
    );
}

export default Header;