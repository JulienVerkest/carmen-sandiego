import React, { Component } from 'react';
import Config from '../../../Game/Data/Config'; 
import './index.css';

class ModalClues extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalCluesShow: false
    };
  }

  viewClue = (clue) => {
    this.props.hideModalClue();
    this.props.displayClue(clue);
  }

  emoji = (place) => {
    let emoji;
    switch(place) {
    case 'Museum': 
      emoji = '🏤';
      break;
    case 'Airport': 
      emoji = '🛬';
      break;
    case 'Hotel': 
      emoji = '🏨';
      break;
    case 'Palace': 
      emoji = '🏯';
      break;
    case 'Bank': 
      emoji = '🏦';
      break;
    case 'Library': 
      emoji = '📘';
      break;
    case 'Foreign Ministry': 
      emoji = '🏢';
      break;
    case 'Riverfront': 
      emoji = '🚢';
      break;
    case 'Harbor':
      emoji = '⚓️';
      break;
    default:
      emoji = '⛱' 
      break;
    }
    return emoji;
  }

  render() {
    const { lang, clues, hideModalClue } = this.props;
    return(
      <div className="cs-modal-clues" >
        <div className="cs-modal-clues-inner">
          <div className="cs-modal-clues-building">
          {clues.map((clue, index) => 
            <span key={index} data-key={index} role="img" className="cs-modal-clues-emoji" aria-label="emoji">{this.emoji(clue.Place)}</span>
          )} 
          </div>
          {
            clues.length === 0 ? <div className="cs-modal-clues-places">no clue here...</div> : ''
          }
          <div className="cs-modal-clues-places">
            {clues.map((clue, index) =>
              <div key={index} data-key={index} onClick={() => this.viewClue(clue)}>{clue.Place}</div>
            )}
          </div>
          <br/>
          <button className="cs-modal-clues-close" type="button" onClick={() => hideModalClue()}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
}

export default ModalClues;