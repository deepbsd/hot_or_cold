import React from 'react';


export default class GuessForm extends React.Component {

	constructor(props) {
			super(props);
			this.passIt = this.passIt.bind(this);
			this.state = {
					userGuess: ''

			}
	}

	resetForm(){
		this.setState({
			userGuess: ''
		})
	}

	passIt(input){
		this.setState({
			userGuess: input
		})
	}

render(){

	return (

			<form onSubmit={e => this.props.processGuess(e, this.state.userGuess)} >
				<input className="text" id="userInput" value={this.state.userGuess} type="number" maxLength="3" required disabled={this.props.gameEnd}
				onChange={(e) => this.passIt(e.target.value)} ></input>
				<input className="button" type="submit" disabled={this.props.gameEnd}></input>
			</form>

	);
}
}
