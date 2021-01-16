import React from "react";

import "../styles/About.css";

function About() 
{
    React.useState(() => {
        document.title = "Ecoyou - About";
    }, []);
    return (
        null
    );
}

export default About;