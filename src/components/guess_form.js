import React from 'react';


export default class GuessForm extends React.Component {

	constructor(props) {
			super(props);
			this.passIt = this.passIt.bind(this);
			this.watchInput = this.watchInput.bind(this);
			this.state = {
					userGuess: ''
			}
	}

	watchInput(e, input){
		e.preventDefault();
		this.setState({
			userGuess: input
		})
	}

	passIt(e,input){
		e.preventDefault();
		this.props.processGuess(e, input)
		this.setState({
			userGuess: ''
		})

	}

render(){

		return (

				<form onSubmit={e => this.passIt(e, this.state.userGuess)} >
					<input className="text" value={this.state.userGuess} type="number" maxLength="3" required disabled={this.props.gameEnd}
					onChange={(e) => this.watchInput(e, e.target.value)} ></input>
					<input className="button" type="submit" disabled={this.props.gameEnd}></input>
				</form>

		);
	}
}
