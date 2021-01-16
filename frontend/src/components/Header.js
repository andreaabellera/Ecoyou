import React from "react";

import "../styles/Header.css";

import HeaderBase from "../resources/header_base.png";
import HeaderOrnament from "../resources/header_ornament.png";
import EcoyouIcon from "../resources/ecoyou.png";
import EcoyouSelected from "../resources/ecoyou_selected.png";
import HeaderDiscoverIcon from "../resources/header_discover.png";
import HeaderRedeemIcon from "../resources/header_redeem.png";
import HeaderChallengesIcon from "../resources/header_challenges.png";
import HeaderMeIcon from "../resources/header_me.png";

import HeaderDiscoverSelected from "../resources/header_discover_selected.png";
import HeaderRedeemSelected from "../resources/header_redeem_selected.png";
import HeaderChallengesSelected from "../resources/header_challenges_selected.png";
import HeaderMeSelected from "../resources/header_me_selected.png";

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
            <div className = "header-base" style={{ backgroundImage: `url(${HeaderBase})` }}>
                <div className = "header-item">
                    <NavLink to="/discover" className="header-item" activeClassName="active">
                        <img src={HeaderDiscoverIcon} />
                        Discover
                    </NavLink>
                </div>

                <div className = "header-item">
                    <NavLink to="/challenges" className="header-item" activeClassName="active">
                        <img src={HeaderChallengesIcon} />
                        Challenges
                    </NavLink>
                </div>

                <div>
                    <NavLink to="/about" className="logo-item" activeClassName="active">
                        <img src={EcoyouIcon} />
                        The change starts with you
                    </NavLink>
                </div>

                <div className = "header-item">
                    <NavLink to="/redeem" className="header-item" activeClassName="active">
                        <img src={HeaderRedeemIcon} />
                        Redeem
                    </NavLink>
                </div>

                <div className = "header-item">
                    <NavLink to="/me" className="header-item" activeClassName="active">
                        <img src={HeaderMeIcon} />
                        Me
                    </NavLink>
                </div>
            </div>

            <div className="header-ornament" style={{ backgroundImage: `url(${HeaderOrnament})` }}></div>
        </header>
    );
}

export default Header;