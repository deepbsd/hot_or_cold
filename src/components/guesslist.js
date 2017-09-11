import React from 'react';



export default function GuessList(props) {

	const guesses = props.guessList.map((guess, index) => {
			return <li key={index} >{guess}</li>
	});

	return (
		<div>
			<ul className="guessBox clearfix">
			{guesses}
			</ul>
		</div>
	);
}
