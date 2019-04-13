import React, { Component } from 'react';
import Dossiers from '../../../Game/Data/Dossiers';
import Config from '../../../Game/Data/Config';
import './index.css';

class ModalDossiers extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalDossierShow: false, 
      dossiers: Dossiers
    };
  }
  
  render() {
    const { lang, hideModalDossier, lastOpenDossier } = this.props;
    const Dossier = this.state.dossiers.filter(dossier => dossier[lang].id === lastOpenDossier);
    const display = Object.keys(Dossier[0][lang]).map(key => {
        if(key !=="id" && key !== "Miscellaneous") {
          return <div key={key}><b>{key}: </b><span>{Dossier[0][lang][key]}</span></div>;
        }
        return true;
      }
    );
    return(
      <div className="cs-modal-dossier" >
        <div className="cs-modal-dossier-inner">
          <header className="cs-modal-dossier-name">{Dossier[0][lang].Name}</header>
          <article>
            <img src={Dossier[0][lang].Picture} alt="" className="cs-modal-dossier-picture" />
            <div className="cs-modal-dossier-infos">
              {display}
            </div>
          </article>
          <button className="cs-modal-dossier-close" type="button" onClick={() => hideModalDossier()}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
} 

export default ModalDossiers;