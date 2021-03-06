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



/*

import React from 'react';

export default function GuessList (props) {

  const guesses = props.theGuesses.map((guess, index) => {
    return <li key={index}>{guess}</li>
  });

  return (
    <ul className="guessBox clearfix">{guesses}</ul>
  );

};

*/
