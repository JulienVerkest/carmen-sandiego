import React, { Component } from 'react';
import './index.css';

class PlaceAndDate extends Component {
  render(){
    const { place, mydate } = this.props;
    return (
      <div>
        <div className="cs-place" style={{textTransform:'uppercase'}}>{place}</div>
        <div className="cs-date">{mydate} </div>
      </div>
    );
  }
}

export default PlaceAndDate;