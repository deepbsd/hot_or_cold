import React from 'react';


export default class GuessForm extends React.Component {

	constructor(props) {
			super(props);
			this.passIt = this.passIt.bind(this);
			this.state = {
					userGuess: '',
					resetVal: ''

			}
	}

	resetForm(){
		this.setState({
			resetVal: ''
		});
	}

	passIt(input){
		this.setState({
			userGuess: input,
			resetVal: input
		})
		this.resetForm();
	}

render(){
	let inVal = this.state.resetVal;
	return (

			<form onSubmit={e => this.props.processGuess(e, this.state.userGuess)} >
				<input className="text" id="userInput" value={inVal} type="number" maxLength="3" required disabled={this.props.gameEnd}
				onChange={(e) => this.passIt(e.target.value)} ></input>
				<input className="button" type="submit" disabled={this.props.gameEnd}></input>
			</form>

	);
}
}
