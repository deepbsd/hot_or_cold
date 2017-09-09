import React from 'react';

import './hotorcold.css';

export default function GuessCount(props) {
	return (
		<div className="">
			<span id="count">Guess#{props.guessCount}</span>
		</div>
	);
}

GuessCount.defaultProps = {
	whatever: ''
}
