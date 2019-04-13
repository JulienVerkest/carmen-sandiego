import React, { Component } from 'react';
import vilain from './vilain.gif';
import './index.css';

class Vilain extends Component {
  render() {
    const { isViewVilain } = this.props;
    return(
      <div style={{backgroundImage:`url(${vilain})`}} className="cs-vilain">
      </div>
    );
  }
}

export default Vilain;