import React, { Component } from 'react';
import './index.css';

class PlaceAndDate extends Component {
  render(){
    const { place, mydate } = this.props;
    let myPlace = (mydate.getHours() > 22 || mydate.getHours() < 8) ? 'sleeping...' : place; 
    return (
      <div>
        <div className="cs-place" style={{textTransform:'uppercase'}}>{myPlace}</div>
        <div className="cs-date">{mydate.toLocaleDateString('en-US', { weekday: 'long', hour: 'numeric' })} </div>
      </div>
    );
  }
}

export default PlaceAndDate;