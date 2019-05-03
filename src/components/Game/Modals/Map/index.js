import React, { Component } from 'react';
import worldmap from './map-2.jpg';
// import styled from 'styled-components'
import './index.css';


class ModalMap extends Component {
  constructor(...args) {
    super(...args);
    this.myDiv = null;
    this.state = { 
      modalMapShow: false,
      styleArrivee: {},
      animationName: '',
      xArrivee: 0,
      yArrivee: 0
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

   // console.log('Depart:'+ depart)

    this.props.destinations.forEach((item, index) => {
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
    // const planeClasses = isPlane ? `cs-plane cs-active ${cityStart.toLowerCase().replace(' ', '')}` : 'cs-plane';
    let xArrivee = 0;
    let yArrivee = 0;
     if(this.props.isPlane) {
      xArrivee = this.myDiv.getElementsByClassName(this.props.place.toLowerCase().replace(' ', ''))[0].offsetLeft;
      yArrivee = 339 - this.myDiv.getElementsByClassName(this.props.place.toLowerCase().replace(' ', ''))[0].offsetTop;
    }
    return(
      <div className="cs-modal-map" id="worldmap">
        <div className="cs-modal-map-inner">
          <img src={worldmap} alt="world map" />
          <div ref={this.mymap}>
            <div className={departClasses}>{cityStart}</div>
            {destinations.map((item, index) =>
              <div id={hoverDestination && hoverDestination.toLowerCase().replace(' ', '') === item.toLowerCase().replace(' ', '') ? 'hovDestination' : ''} className={item.toLowerCase().replace(' ', '')} key={index} >⦿{item}</div>
            )} 
            {
              isPlane
              ? <Plane cityStart={cityStart} isPlane={isPlane} xArrivee={xArrivee} yArrivee={yArrivee}></Plane>
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}

class Plane extends Component {
  render() {
    let style = {};
    if(this.props.isPlane) {
      style = {
        left:`${this.props.xArrivee}px`,
        bottom: `${this.props.yArrivee}px` 
      }
    }
    const { cityStart, isPlane } = this.props;
    const planeClasses = isPlane ? `cs-plane cs-active ${cityStart.toLowerCase().replace(' ', '')}` : 'cs-plane';
    return (
      <div className={planeClasses} style={style}>
        <span role="img" aria-label="emoji">✈️</span>
      </div>
    )
  }
}

export default ModalMap;