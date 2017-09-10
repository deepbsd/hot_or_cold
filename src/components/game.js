import React from 'react';
import Header from './header';
import GuessSection from './guess_section';
import '../index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
      }


      render (){
        return (
          <div  >
              <Header />
              <GuessSection />
          </div>
        )
      }


}
