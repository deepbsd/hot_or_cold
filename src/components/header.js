import React from 'react';
import TopNavigation from './top_navigation';
import Modal from './modal';

import '../index.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            modal: false,
        };
    }

    handleClick(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
          modal: !prevState.modal
        }));
    }

    restartGame(e){
      e.preventDefault();
      // Restart the game here
      console.log('Hey, better restart the game here');
      //alert('Restarting game...');
      this.props.endFunc();
    }

    render() {
        if (this.state.modal){
            return(
                <Modal className="overlay"  toggleModal={this.handleClick} />
            );
        } else {
            return (
                <TopNavigation className="nav" toggleModal={this.handleClick}
                restart={this.restartGame}  />
            );
        }

    }

}
