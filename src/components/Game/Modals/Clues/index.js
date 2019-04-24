import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config'; 
import './index.css';

class ModalClues extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalCluesShow: false,
      selectedItem: ''
    };
  }

  viewClue = (clue) => {
    this.props.hideModalClue();
    this.props.viewClue(clue);
  }

  viewArrest = () => {
    this.props.hideModalClue();
    this.props.viewArrest();
  }



  hov = (clue) => this.setState({selectedItem: clue});
  out = () => this.setState({selectedItem: ''});

  emoji = (place) => {
    let emoji;
    switch(place) {
    case 'museum': 
      emoji = '🏤';
      break;
    case 'airport': 
      emoji = '🛬';
      break;
    case 'hotel': 
      emoji = '🏨';
      break;
    case 'palace': 
      emoji = '🏯';
      break;
    case 'bank': 
      emoji = '🏦';
      break;
    case 'library': 
      emoji = '📘';
      break;
    case 'foreignministry': 
      emoji = '🏢';
      break;
    case 'riverfront': 
      emoji = '🚢';
      break;
    case 'harbor':
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
            <span key={index} onClick={() => clue.Clue === '' ? this.viewArrest() : this.viewClue(clue)} data-key={index} role="img" className={clue.Place.key === this.state.selectedItem ? "cs-modal-clues-emoji cs-selected" : "cs-modal-clues-emoji"} aria-label="emoji">{this.emoji(clue.Place.key)}</span>
          )} 
          </div>
          {
            clues.length === 0 ? <div className="cs-modal-clues-places">no clue here...</div> : ''
          }
          <div className="cs-modal-clues-places">
            {clues.map((clue, index) =>
              <div key={index} data-key={index} onMouseOver={() => this.hov(clue.Place.key)} onMouseOut={() => this.hov(clue.Place.key)} onClick={() => clue.Clue === '' ? this.viewArrest() : this.viewClue(clue)}>{clue.Place.value}</div>
            )}
          </div>
          <br/>
          <button className="cs-modal-clues-close" type="button" onClick={() => hideModalClue()}>{Config[lang].modals.close}</button><br/><br/>
        </div>
      </div>
    )
  }
}

export default ModalClues;