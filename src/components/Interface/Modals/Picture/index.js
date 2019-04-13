import React, { Component } from 'react';
import paris from '../../../Game/Data/Cities/paris.jpg';
import london from '../../../Game/Data/Cities/london.jpg';
import cairo from '../../../Game/Data/Cities/cairo.jpg';
import baghdad from '../../../Game/Data/Cities/baghdad.jpg';
import athens from '../../../Game/Data/Cities/athens.jpg';
import bamako from '../../../Game/Data/Cities/bamako.jpg';
import bangkok from '../../../Game/Data/Cities/bangkok.jpg';
import buenosaires from '../../../Game/Data/Cities/buenos-aires.jpg';
import istanbul from '../../../Game/Data/Cities/istanbul.jpg';
import mexicocity from '../../../Game/Data/Cities/mexico-city.jpg';
import montreal from '../../../Game/Data/Cities/montreal.jpg';
import moroni from '../../../Game/Data/Cities/moroni.jpg';
import newdehli from '../../../Game/Data/Cities/new-dehli.jpg';
import newyork from '../../../Game/Data/Cities/new-york.jpg';
import pekin from '../../../Game/Data/Cities/peking.jpg';
import reykjavik from '../../../Game/Data/Cities/reykjavik.jpg';
import riodejaneiro from '../../../Game/Data/Cities/rio-de-janeiro.jpg';
import rome from '../../../Game/Data/Cities/rome.jpg';
import sanmarino from '../../../Game/Data/Cities/san-marino.jpg';
import sydney from '../../../Game/Data/Cities/sydney.jpg';
import tokyo from '../../../Game/Data/Cities/tokyo.jpg';

import './index.css';
class Picture extends Component {
  render() {
    const { place } = this.props;
    const picture = place.toLowerCase().replace(" ","");
    return (
      <div>
        {
          picture === 'paris'
          ? <img src={paris} alt="paris"   className="cs-picture" />
          : ''
        }
        {
          picture === 'london'
          ? <img src={london} alt="london"   className="cs-picture" />
          : ''
        }
        {
          picture === 'baghdad'
          ? <img src={baghdad} alt="baghdad"   className="cs-picture" />
          : ''
        }         
        {
          picture === 'cairo'
          ? <img src={cairo} alt="cairo"   className="cs-picture" />
          : ''
        }
        {
          picture === 'tokyo'
          ? <img src={tokyo} alt="tokyo"  className="cs-picture" />
          : ''
        }
        {
          picture === 'rome'
          ? <img src={rome} alt="rome"  className="cs-picture" />
          : ''
        }
        {
          picture === 'reykjavik'
          ? <img src={reykjavik} alt="reykjavik"   className="cs-picture" />
          : ''
        }
        {
          picture === 'riodejaneiro'
          ? <img src={riodejaneiro} alt="riodejaneiro"   className="cs-picture" />
          : ''
        }
      </div>
    )
  }
}

export default Picture;