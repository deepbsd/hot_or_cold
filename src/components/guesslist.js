import React from 'react';

import './hotorcold.css';

export default function GuessList(props) {


	return (
		<div className="guessBox">
			{props.guessList}
		</div>
	);
}
