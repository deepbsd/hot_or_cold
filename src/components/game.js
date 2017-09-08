import React from 'react';
import Header from './header';
import GuessSection from './guess_section';
import '../index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.processUserGuess = this.processUserGuess.bind(this);

        this.state = {
          compNumber: this.randomNumber(),
          userGuesses: [],
          userGuess: 'Void',
          guessCount: 0,
          feedback: 'No feedback yet...'
        }
      }

      guessDifference(guess){
        return Math.abs(this.state.compNumber - guess);
      }

      processUserGuess(num){
        let messg = '';
        num = parseInt(num, 10);
        if (num === this.state.compNumber){
          messg = "You win!"
        }
        if (this.guessDifference(num) <= 5){
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
        this.setState({
          userGuess: num,
          userGuesses: [...this.state.userGuesses, this.state.userGuess],
          feedback: messg,
          guessCount: this.state.userGuesses.length
        });
        return messg;
      }

      randomNumber(){
        return Math.round(Math.random()*100)+1;
      }

      render (){
        return (
          <div className="nav">
              <Header className="nav" />
              <GuessSection  processGuess={this.props.processUserGuess}
              compN={this.state.compNumber}
              guessList={JSON.stringify(this.state.userGuesses)}
              guessCount={this.state.guessCount}
              feedback={this.state.feedback}  />
          </div>
        )
      }


}
