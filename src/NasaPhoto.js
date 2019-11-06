import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NasaPhoto() {
    const [photo, setPhoto] = useState({});
    
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=9Y6VT1zRLHXQ2wbtNfb9G1TncBEoM9M9EJtrrDNc')
            .then(response => {
                console.log(response.data);
                setPhoto(response.data);
            })
    }, [])

    return (
        <div>
            <h2>{photo.title}</h2> 
            <img src={photo.url} className="App-logo"/>

        </div>
    );

}