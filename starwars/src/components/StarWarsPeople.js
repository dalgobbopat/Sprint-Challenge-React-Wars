import React, {useState, useEffect} from 'react';
import StarwarsCard from './starwarsCard';
import Axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
	height: 90vh;
	width: 50vw;
	margin: 25px auto;
	overflow: auto;
	background-color: rgba(0,0,0,0.70)
`

const StarwarsPeople = () => {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		Axios.get('https://swapi.co/api/people/')
		.then(Response => {
			setCharacters(Response.data.results);			
		})
		.catch(error => console.log('DARTH VADER KILLED YOU', error))
	}, [])

	return (
		<Container>
			{characters.map((data) => (
	            <StarwarsCard data={data}/>
	        ))}
	    </Container>
	)

}

export default StarwarsPeople