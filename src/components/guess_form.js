import React from 'react';


export default class GuessForm extends React.Component {

	constructor(props) {
			super(props);
			this.passIt = this.passIt.bind(this);
			this.state = {
					userGuess: ''
			}
	}

	passIt(input){
		this.setState({
			userGuess: input
		})

	}

render(){
	return (

			<form onSubmit={e => this.props.processGuess(e, this.state.userGuess)} >
				<input className="text" type="number" maxLength="3" required disabled={this.props.gameEnd}
				onChange={(e) => this.passIt(e.target.value)} ></input>
				<input className="button" type="submit"></input>
			</form>

	);
}
}

GuessForm.defaultProps = {
	whatever: 'wha?'
}
