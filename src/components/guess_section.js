import React from 'react';
import GuessForm from './guess_form';
import GuessList from './guesslist';
import GuessCount from './guesscount';



export default class GuessSection extends React.Component {
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
        <div className="">
      		<GuessForm  processGuess={this.props.processGuess} />

      		<GuessList  guessList={this.props.guessList} />

      		<GuessCount  guessCount={this.props.guessCount} />
        </div>
    	);
    }


}
