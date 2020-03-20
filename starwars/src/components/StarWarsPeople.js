import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const StarWarsPeople =() => {
    const [characters, setCharacters] = useState([]);
    
    useEffect (() => {
        Axios
        .get('http https://swapi.co/api/people/')
        .then(response => {
            console.log(response);
        })
    })
}