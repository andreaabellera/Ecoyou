import React from "react";

import "../styles/Discover.css";

import config from "../config";

import BookmarkIcon from '@material-ui/icons/Bookmark';

import Button from '@material-ui/core/Button';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import backgroundImg from "../resources/bg/unsplash-wildfire-1.jpg"

function Discover()
{
    const [listOfItems, setListOfItems] = React.useState([]);
    const [currentItemInd, setCurrentItemInd] = React.useState(0);

    const currentItem = listOfItems[currentItemInd];

    const addToItemInd = (change) => 
    {
        setCurrentItemInd(currentItemInd => 
        {
            // Add and handle index of list's overflow
            let newCurrentItemInd = (currentItemInd + change) % listOfItems.length;
            // Handle index of list's underflow
            while(newCurrentItemInd < 0)
                newCurrentItemInd += listOfItems.length;
            
            return newCurrentItemInd;
        });
    };

    React.useState(() => 
    {
        document.title = "Ecoyou - Discover";
        console.log(config.api + "/issues/all");
        fetch(config.api + "/issues/all")
        .then(res => res.json())
        .then(listOfItemsResponse => 
        {
            setListOfItems(listOfItemsResponse.results);
        })
    }, []);

    return <div className="discover-container" 
        style={{ backgroundImage: `url(${backgroundImg})` }}
    >
        <div className="challenges">
            <div className="item-inds">
                <ChevronLeftIcon style={{ fontSize: 40 }} onClick={() => addToItemInd(-1)}/>
                {currentItemInd + 1}/{listOfItems.length}
                <ChevronRightIcon style={{ fontSize: 40 }} onClick={() => addToItemInd(1)}/>
            </div>
            <div className="title">
                { currentItem && currentItem.name }
            </div>
            <div className="body">
                { currentItem && currentItem.description }
            </div>
            <div className="buttons">
                <Button variant="contained" color="default">
                  Join challenge 
                </Button>
                <Button variant="contained"
                    color="default"
                    startIcon={<BookmarkIcon />}
                >
                  Donate
                </Button>
            </div>
        </div>
    </div>
}

export default Discover;