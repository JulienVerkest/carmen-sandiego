import React, { Component } from 'react';
import worldmap from './map.jpg';
import './index.css';


class ModalMap extends Component {
  constructor(...args) {
    super(...args);
    this.myDiv = null;
    this.state = { 
      modalMapShow: false,
    };
    this.mymap = element => {
      this.myDiv = element;
    }; 
  }

  // on renvoi un tableau d'objet { city:'Ville', x: positionX, y:positionY} des points de la carte
  componentDidMount() {
    let markers = [];
    let depart = {
      'city': 'depart',
      'x': this.myDiv.getElementsByClassName('depart')[0].offsetLeft,
      'y': 339 - this.myDiv.getElementsByClassName('depart')[0].offsetTop
    }

    this.props.destinations.map((item, index) => {
      let marker = {
        'city': item,
        'x': this.myDiv.getElementsByClassName(item.toLowerCase().replace(' ', ''))[0].offsetLeft,
        'y':339 - this.myDiv.getElementsByClassName(item.toLowerCase().replace(' ', ''))[0].offsetTop
      };
      markers.push(marker)
    });
    markers.push(depart);
    this.props.changeMarkersDestinations(markers);
  }

  render() {
    const { cityStart, destinations, hoverDestination, isPlane } = this.props;
    const departClasses = `depart ${cityStart.toLowerCase().replace(' ', '')}`;
    const planeClasses = isPlane ? 'cs-plane cs-active' : 'cs-plane';
    return(
      <div className="cs-modal-map" id="worldmap">
        <div className="cs-modal-map-inner">
          <img src={worldmap} alt="world map" />
          <div ref={this.mymap}>
            <div className={departClasses}>►{cityStart}</div>
            {destinations.map((item, index) =>
              <div id={hoverDestination && hoverDestination.toLowerCase().replace(' ', '') === item.toLowerCase().replace(' ', '') ? 'hovDestination' : ''} className={item.toLowerCase().replace(' ', '')} key={index} >⦿{item}</div>
            )} 
            <div className={planeClasses}>
              <span role="img" aria-label="emoji">✈️</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalMap;