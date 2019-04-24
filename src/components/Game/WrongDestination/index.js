import React, { Component } from 'react';
import '../ClueBubble/index.css';

class WrongDestination extends Component {
  render() {
    const { clue } = this.props; 
    return(
      <div className="cs-bubble-wrapper">
        <div className="cs-bubble-inner">
          <div className="cs-bubble">{clue.Clue}</div>
            <div className="cs-guy">
              {
                clue.Guy.key === 'curator'
                ? <span role="img" className="cs-emoji" aria-label="emoji">🤷</span>
                : ''
              }
              <br/>{clue.Guy.value}
          </div>
        </div> 
      </div>
    );
  }
}

export default WrongDestination;