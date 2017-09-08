import React from 'react';

import './hotorcold.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clickFuncName = this.clickFuncName.bind(this);
        this.state = {
            whatever: '',
        };
    }

    clickFuncName(){
    	console.log('hey');
    }

    render(){
    	return (
    		<GuessForm   />
    		<GuessList   />
    		<GuessCount   />
    	);
    }


}