import React from 'react';


export default class GuessForm extends React.Component {

	constructor(props) {
			super(props);
			this.passIt = this.passIt.bind(this);
			this.state = {
					userGuess: ''
			}
	}

	resetForm(e){
		e.preventDefault();
		this.setState({
			userGuess: ''
		})
	}

	passIt(e,input){
		e.preventDefault();
		this.setState({
			userGuess: input
		})
		//this.resetForm(e);
	}

render(){
	let val = this.state.userGuess;
	return (

			<form onSubmit={e => this.props.processGuess(e, this.state.userGuess)} >
				<input className="text" value={val} type="number" maxLength="3" required disabled={this.props.gameEnd}
				onChange={(e) => this.passIt(e, e.target.value)} ></input>
				<input className="button" type="submit" disabled={this.props.gameEnd}></input>
			</form>

	);
}
}
