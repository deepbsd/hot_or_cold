import React from 'react';

import './hotorcold.css';

export default function GuessList(props) {
	return (
		<div className="">
			<p>{props.guessList}</p>
		</div>
	);
}

GuessList.defaultProps = {
	whatever: ''
}
