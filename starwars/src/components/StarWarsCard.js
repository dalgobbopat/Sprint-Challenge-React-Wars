import React from 'react';
import styled from 'styled-components';

const MainCard = styled.div`
	margin: 4px auto;
	width: 100%;
	border-top: 2px grey dashed;
	border-bottom: 2px grey dashed;
`

const Card = styled.div`
	width: 100%;
	align-items: center;
	color: white;
	margin: 20px 0px;
	padding: 20px 0px;
	
`

const StarwarsCard = (props) => {
	//console.log(props);

	return(
		<MainCard>
			<Card>
                
				<h1>{props.data.name}</h1>
				<h3>DOB: {props.data.birth_year}</h3>
				<h3>Height: {props.data.height}</h3>
				<h3>Mass: {props.data.mass}</h3>
				<h4>{props.data.name} appears in {props.data.films.length} Star Wars film(s)</h4>
                
			</Card>
		</MainCard>
	)

}

export default StarwarsCard;