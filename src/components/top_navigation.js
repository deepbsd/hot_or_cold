import React from 'react';


export default function TopNavigation(props) {
	return (
		<header>
			<nav>
			<ul className="clearfix">
				<li><a className="what" onClick={(e) => props.toggleModal(e)}>What?</a></li>
				<li><a className="new" onClick={(e) => props.restart(e)}>+ NewGame?</a></li>
			</ul>
			</nav>
			<h1>HOT or COLD</h1>
		</header>
		);
};
