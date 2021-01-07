import React from "react";

import "../styles/Discover.css";

import BookmarkIcon from '@material-ui/icons/Bookmark';

import Button from '@material-ui/core/Button';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import backgroundImg from "../resources/bg/unsplash-wildfire-1.jpg"

function Discover()
{
    const [listOfItems, setListOfItems] = React.useState([
        {
            title: "Amazon forest fires",
            body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
            title: "HMMMMM",
            body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        }
    ]);
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
        /*
         * Has to load discover items into listOfItems here
         * (when the backend is ready)
         */
    }, []);

    return <div class="discover-container" 
        style={{ backgroundImage: `url(${backgroundImg})` }}
    >
        <div className="challenges">
            <div className="item-inds">
                <ChevronLeftIcon style={{ fontSize: 40 }} onClick={() => addToItemInd(-1)}/>
                {currentItemInd + 1}/{listOfItems.length}
                <ChevronRightIcon style={{ fontSize: 40 }} onClick={() => addToItemInd(1)}/>
            </div>
            <div className="title">
                { currentItem.title }
            </div>
            <div className="body">
                { currentItem.body }
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