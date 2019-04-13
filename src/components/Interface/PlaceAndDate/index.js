import React, { Component } from 'react';
import './index.css';

class PlaceAndDate extends Component {
  render(){
    const { place, mydate } = this.props;
    let myPlace = (parseInt(mydate.format("H")) > 22 || parseInt(mydate.format("H")) < 8) ? 'sleeping...' : place; 
    return (
      <div>
        <div className="cs-place" style={{textTransform:'uppercase'}}>{myPlace}</div>
        <div className="cs-date">{mydate.format("dddd, h a")} </div>
      </div>
    );
  }
}

export default PlaceAndDate;