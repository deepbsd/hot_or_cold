import React from 'react';


export default function TopNavigation(props) {
	return (
			<div className="nav">
				<div className="li" onClick={(e) => props.toggleModal(e)}>Modal</div>
				<div className="li" onClick={(e) => props.restart(e)}>+NewGame?</div>
			</div>
		);
};
