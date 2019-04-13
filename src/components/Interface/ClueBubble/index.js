import React, { Component } from 'react';
import Vilain from '../Vilain';
import './index.css';

class ClueBubble extends Component {
  render() {
    const { clue, isVilain, Cases, lang, userCaseStep } = this.props;
    return(
      <div className="cs-bubble-wrapper">
        {
          isVilain && userCaseStep[1] > 0
          ? <Vilain></Vilain>
          : ''
        }
        <div className="cs-bubble-inner">
          <div className="cs-bubble">{clue.Clue}</div>
          <div className="cs-guy">
            {
              clue.Guy === 'Curator'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🤷🏼‍♂️</span>
              : ''
            }
            {
              clue.Guy === 'Pilot'
              ? <span role="img" className="cs-emoji" aria-label="emoji">👨🏻‍✈️</span>
              : ''
            }
            {
              clue.Guy === 'Solider'
              ? <span role="img" className="cs-emoji" aria-label="emoji">💂🏻‍♂️</span>
              : ''
            }
            {
              clue.Guy === 'House detective'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Privy Councillor'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Bank guard'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Reference librarian'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Under secretary'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Sailor\'s parrot'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }
            {
              clue.Guy === 'Palace guard'
              ? <span role="img" className="cs-emoji" aria-label="emoji">🙅</span>
              : ''
            }                   
            <br/>{clue.Guy}
          </div>
        </div>
      </div>
    );
  }
}

export default ClueBubble;