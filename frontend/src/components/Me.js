import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import "../styles/Me.css";

function Me() 
{
    let [userData, setUserData] = React.useState();
    return (
        <div className="me-container">
            <div className="top-container">
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
                        <ListItemText primary="Inbox" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                      </ListItem>
                    </List>
                </div>
            </div>
            <div className="bottom-container">
                
            </div>
        </div>
    );
}

export default Me;