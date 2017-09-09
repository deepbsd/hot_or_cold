import React from 'react';
import GuessForm from './guess_form';
import GuessList from './guesslist';
import GuessCount from './guesscount';



export default class GuessSection extends React.Component {
    constructor(props) {
        super(props);
        this.processUserGuess = this.processUserGuess.bind(this);
        this.guessDifference = this.guessDifference.bind(this);
        this.randomNumber = this.randomNumber.bind(this);
        this.state = {
          compNumber: this.randomNumber(),
          userGuesses: [],
          userGuess: '',
          guessCount: 0,
          feedback: 'No feedback yet...'
        };
    }

    guessDifference(guess){
      return Math.abs(this.state.compNumber - guess);
    }

    randomNumber(){
      return Math.round(Math.random()*100)+1;
    }

    processUserGuess(e, num){
      e.preventDefault();
      let messg = '';
      num = parseInt(num, 10);
      if (this.guessDifference(num)===0){
        messg = "You win!"
      } else if (this.guessDifference(num) <= 5){
        messg = 'Super Hot! (within 5)';
      } else if (this.guessDifference(num) <= 10){
        messg = 'Hot! (within 10)';
      } else if (this.guessDifference(num) <= 20){
        messg = 'Luke warm.  (within 20)';
      } else if (this.guessDifference(num) <= 30){
        messg = "Chilly (within 30)";
      } else {
        messg = "Freezing! (greater than 30)";
      }
      console.log("number: ",this.state.compNumber,' mesg: ',messg);
      this.setState({
        userGuess: num,
        userGuesses: [...this.state.userGuesses, this.state.userGuess],
        feedback: messg,
        guessCount: this.state.userGuesses.length
      });
    }

    render(){
    	return (
        <div className="game" >
        <h2>{this.state.feedback}</h2>
      		<GuessForm  processGuess={this.processUserGuess} gameEnd={false} />

      		<GuessCount  guessCount={this.state.guessCount} />

      		<GuessList  guessList={this.state.userGuesses.join(',')} />


        </div>
    	);
    }


}
