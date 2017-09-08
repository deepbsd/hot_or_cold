import React from 'react';


export default function Modal(props) {

	return (

			<div className="content">
				<h1>What do I do?</h1>
					<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
					<ol>
						<li> I pick a random secret number between 1 to 100 and keep it hidden.</li>
						<li> You need to guess until you can find the hidden secret number. </li>
						<li> You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
					</ol>
					<p>So, Are you ready?</p>
					<div className="close" onClick={(e) => props.toggleModal(e)} >I got it</div>
			</div>

		);
};
