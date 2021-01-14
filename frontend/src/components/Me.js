import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddIcon from '@material-ui/icons/AddCircleOutline';

import "../styles/Me.css";
import defender from "../resources/badge_defender.png";
import recycler from "../resources/badge_recycler.png";
import yellowbg from "../resources/bg/yellow-bg.jpg";
import friendicon from "../resources/header-me.png";
import cutesloth from "../resources/sloth.png";

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
            <div className="top-container" style={{ backgroundImage: `url(${yellowbg})` }}>
                <div className="goals-container">
                    <List
                        component="nav" 
                        aria-label="main mailbox folders"
                        subheader={
                          <ListSubheader component="div">
                            Goals
                          </ListSubheader>
                        }
                    >
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mail" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Current Challenges" />
                      </ListItem>
                    </List>
                </div>

                <div className="profile-container">
                    <div className="profile-pic" style={{ backgroundImage: `url(${cutesloth})` }}></div>
                    <div className="profile-name">Signed in as Guest</div>
                    <div className="friend-container">
                        <div className="my-friends">MY FRIENDS</div>
                        <div className="friend-pic" style={{ backgroundImage: `url(${cub})` }}></div>
                        <div className="friend-pic" style={{ backgroundImage: `url(${croco})` }}></div>
                        <div className="friend-pic" style={{ backgroundImage: `url(${duck})` }}></div>
                        <div className="friend-pic" style={{ backgroundImage: `url(${blobfish})` }}></div>
                        <div className="friend-pic" style={{ backgroundImage: `url(${bat})` }}></div>
                        <div className="friend-name"> <AddIcon /> </div>
                        <div className="friend-name">Isham</div>
                        <div className="friend-name">Yashas</div>
                        <div className="friend-name">Mohsen</div>
                        <div className="friend-name">Kunal</div>
                        <div className="friend-name">Andrea</div>
                        <div className="add-friend">add new</div>
                    </div>
                </div>

            </div>

            <div className="bottom-container">
                <div className="badge-title"> BADGES </div>
                <div className="badge-container">
                    <div className="badge" style={{ backgroundImage: `url(${defender})` }}> </div>
                    <div className="badge" style={{ backgroundImage: `url(${recycler})` }}> </div>
                </div>
                <div className="stats"> 
                    <h2>Deeds: 21</h2>
                    <h2>Score: 7010</h2>
                    <h2>Rank: 2109</h2>
                </div>
            </div>
        </div>
    );
}

export default Me;