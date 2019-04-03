import React, { Component } from 'react';
import './index.css';

class Buttons extends Component {
  render() {
    return (
      <div className="cs-btns">
        <div className="cs-btn cs-btn-see">
          <div className="cs-btn-inner"></div>
        </div>
        <div className="cs-btn cs-btn-depart">
          <div className="cs-btn-inner"></div>
        </div>
        <div className="cs-btn cs-btn-search">
          <div className="cs-btn-inner"></div>
        </div>
        <div className="cs-btn cs-btn-crime">
          <div className="cs-btn-inner"></div>
        </div>
      </div>
    );
  }
}

export default Buttons;