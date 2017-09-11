import React from 'react';
import Header from './header';
import GuessSection from './guess_section';
import '../index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.endGame = this.endGame.bind(this);
        this.state = {
          gameEnd: false
        }
      }

      endGame(e){
        e.preventDefault();
        this.setState({
          gameEnd: true
        })
      }

      render (){
        return (
          <div  >
              <Header endFunc={this.state.endGame} />
              <GuessSection endGame={this.state.gameEnd} />
          </div>
        )
      }


}
