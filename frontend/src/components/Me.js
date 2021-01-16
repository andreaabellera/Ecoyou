import React from "react";
import "../styles/Me.css";

import addIcon from '@material-ui/icons/AddCircleOutline';
import defender from "../resources/badge_defender.png";
import recycler from "../resources/badge_recycler.png";
import croco from "../resources/ecoyou_croco.png";
import bat from "../resources/ecoyou_bat.png";
import blobfish from "../resources/ecoyou_blobfish.png";
import duck from "../resources/ecoyou_duck.png";
import cub from "../resources/ecoyou_cub.png";

function Me() 
{
    let [userData, setUserData] = React.useState();
    return (
        <div className="me-container">
            <div className="profile-container">
              <img src={croco} height="10%" width="10%"></img>
              <div className = "username"> Ecoyou dummy </div>
              <div className = "rank-title"> Rank 1: Croc Hero </div>
            </div>
            <div className="friend-container">

            </div>
            <div className="badge-container">

            </div>
        </div>
    );
}

export default Me;