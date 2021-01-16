import React from "react";

import "../styles/Challenges.css";

import backgroundImg from "../resources/bg/bg21.jpg"
import Button from '@material-ui/core/Button';

function Challenges() 
{
    React.useState(() => {
      document.title = "Ecoyou - Challenges";
    }, []);
    return (
        <div className="c1" style={{ backgroundImage: `url(${backgroundImg})` }}> 
            <div className= "p1"> <strong>Monthly Challenge: Help Make Reusable Masks</strong></div>
            <div className="buttons">
                <Button variant="contained" color="default">
                  Join challenge 
                </Button>
                <Button variant="contained" color="default">
                  Past Challenges 
                </Button>
                <Button variant="contained" color="default">
                  Impact 
                </Button>
            </div>    

            <div className="buttons2">
            <Button color="default">
                  Discover
            </Button>
            <Button color="default">
                  Learn More
            </Button>
            <Button color="default">
                  Locate
            </Button>
            </div>
        </div>
        
    );
}

export default Challenges;