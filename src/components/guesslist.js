import React from 'react';



export default function GuessList(props) {

	return (
		<ul className="guessBox">
			{props.guessList}
		</ul>
	);

}
