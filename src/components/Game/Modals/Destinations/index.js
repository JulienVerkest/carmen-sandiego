import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import './index.css';

class ModalDestinations extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalDestinationsShow: false
    };
  }
    render() {
    const { lang, destinations, depart, hide, goTo, hoverTo } = this.props;
    return(
      <div className="cs-modal-destinations" >
        <div className="cs-modal-destinations-inner">
          {
            depart 
            ? destinations.map((item, index) =>
                <div className="btn-depart" key={index} onMouseOver={() => hoverTo(item)} onMouseOut={() => hoverTo('')} onClick={() => goTo(item) }>{item}</div>
              )
            : destinations.map((item, index) =>
                <div  key={index} >{item}</div>
              )
          }
          <br/>
          <button className="cs-modal-destinations-close" type="button" onClick={() => hide()}>{Config[lang].modals.close}</button><br/><br/>
        </div>
      </div>
    )
  }
}

export default ModalDestinations;