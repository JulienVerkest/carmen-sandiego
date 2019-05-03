import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import '../Dossiers/index.css';

class ModalCredits extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      modalCreditsShow: false
    };
  }
  
  componentDidMount() {
    
  }

  render() {
    const { lang, hideModalCredits } = this.props;
    return(
      <div className="cs-modal-dossier" >
        <div className="cs-modal-dossier-inner">
          <header className="cs-modal-dossier-name">{Config[lang].credits.name}</header>
          <article>
            <div className="cs-modal-dossier-picture"><img src="https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/credits/pp.jpg" alt=""  /></div>
            <div className="cs-modal-dossier-infos">
            {Config[lang].credits.infos}
            </div>
          </article>
          <button className="cs-modal-dossier-close" type="button" onClick={() => hideModalCredits(true)}>{Config[lang].modals.close}</button>
        </div>
      </div>
    )
  }
} 

export default ModalCredits;