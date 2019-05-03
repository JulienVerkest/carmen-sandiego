import React, { Component } from 'react';
import Dossiers from '../../../GameData/Data/Dossiers';
import Config from '../../../GameData/Data/Config';
import './index.css';

class ModalDossiers extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalDossierShow: false, 
      dossiers: Dossiers
    };
  }
  
  componentDidMount() {
    
  }

  render() {
    const { lang, hideModalDossier, lastOpenDossier } = this.props;
    const Dossier = this.state.dossiers.filter(dossier => dossier[lang].id === lastOpenDossier);
    const display = Object.keys(Dossier[0][lang]).map(key => {
        if(key !=="id" && key !== "Miscellaneous" && key !== "picture") {
          return <div key={key}><b>{key}: </b><span>{Dossier[0][lang][key]}</span></div>;
        }
        return true;
      }
    );
    return(
      <div className="cs-modal-dossier" >
        <div className="cs-modal-dossier-inner">
          <header className="cs-modal-dossier-name">{Dossier[0][lang].name}</header>
          <article>
            <div className="cs-modal-dossier-picture"><img src={`https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/Dossiers/${Dossier[0][lang].picture}`} alt=""  /></div>
            <div className="cs-modal-dossier-infos">
              {display}
            </div>
          </article>
          <button className="cs-modal-dossier-close" type="button" onClick={() => hideModalDossier(true)}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
} 

export default ModalDossiers;