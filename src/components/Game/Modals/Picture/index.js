import React, { Component } from 'react';
import './index.css';

class Picture extends Component {
  render() {
    const { place } = this.props;
    const picture = "https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/Cities/" + place.toLowerCase().replace(" ","") + ".jpg";
    return (
      <div>
        <img src={picture} alt="" className="cs-picture" />
      </div>
    )
  }
}

export default Picture;