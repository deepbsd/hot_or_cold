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
        console.log('this is endGame()');
        this.setState({
          gameEnd: true
        })
        window.location.reload();
      }

      render (){
        return (
          <div  >
              <Header endFunc={this.endGame} />
              <GuessSection endGame={this.state.gameEnd} />
          </div>
        )
      }


}
