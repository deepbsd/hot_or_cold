import React from 'react';
import Header from './header';
import '../index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        //this.processUserGuess = this.processUserGuess.bind(this);
      }

      render (){
        return <Header className="game" />
      }


}
