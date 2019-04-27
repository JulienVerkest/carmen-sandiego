import React, { Component } from 'react';
import './index.css';
import ModalDestinations from '../Modals/Destinations';
import ModalMap from '../Modals/Map';
import ModalClues from '../Modals/Clues';
import ModalCrime from '../Modals/Crime';
import soundHover from './hover.mp3';

class Buttons extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowModalDestinations: false,
      isShowModalDepart: false,
      isShowModalMap: false,
      isDepart: false,
      isShowModalClue: false,
      isShowModalCrime: false,
      hoverDestination: '',
      criminal: null,
      isPlane: false,
      markers: null
    }
    this.soundHover = null;
    this.setSoundHover = element => {
      this.soundHover = element;
    };
    this.goTo = this.goTo.bind(this);
  }

  // Hide All Modal
  hideAll = () => {
    this.setState({isDepart: false});
    this.setState({isShowModalDestinations: false});
    this.setState({isShowModalDepart: false});
    this.setState({isShowModalMap: false});
    this.setState({isShowModalClue: false});
    this.setState({isShowModalCrime: false});
    this.props.hideClue();
    this.props.hideCrime();
  }

  // Destinations
  showModalDestinations = () => {
    this.hideAll();
    this.setState({isDepart: false});
    this.setState({isShowModalDestinations: true});
  }
  hideModalDestinations = () => this.setState({isShowModalDestinations: false});

  // Départ : Modal Destinations + Map
  showModalDepart = () => {
    this.hideAll();
    this.setState({isDepart: true});
    this.setState({isShowModalMap: true});
    this.setState({isShowModalDepart: true});
  }
  hideModalDepart = () => {
    this.setState({isShowModalDepart: false});
    this.setState({isShowModalMap: false});
  }

  hoverTo = (destination) => this.setState({hoverDestination: destination });

  async goTo(destination) {
    // console.warn(this.state.markers)
    const depart = this.state.markers.filter(item => item.city === 'depart')[0];
    const arrivee = this.state.markers.filter(item => item.city === destination)[0];
    console.log(depart);
    console.log(arrivee);
    const distanceDepartArrivee = Math.trunc(Math.sqrt(Math.pow((arrivee.x - depart.x),2) + Math.pow((arrivee.y - depart.y),2)));
    console.log('distance entre le point de départ et '+ arrivee.city + ':' + distanceDepartArrivee);
    // Paris -> Oslo : 36, ~2h
    // Paris -> Reykjavik : 70, ~4h
    // Paris -> Tokyo : 330, ~10h
    let nbHours;
    if(distanceDepartArrivee < 30) {
      nbHours = 1;
    }
    if(distanceDepartArrivee < 40) {
      nbHours = 2;
    } else if(distanceDepartArrivee < 65) {
      nbHours = 3;
    } else if(distanceDepartArrivee < 90) {
      nbHours = 4;
    } else if(distanceDepartArrivee < 150) {
      nbHours = 5;
    } else if(distanceDepartArrivee < 200) {
      nbHours = 6;
    } else if(distanceDepartArrivee < 300) {
      nbHours = 7;
    } else if(distanceDepartArrivee < 400) {
      nbHours = 8;
    } else {
      nbHours = 9;
    }
    this.hideAll();
    this.setState({isPlane: true});
    this.props.changePlace(destination);
    this.setState({isShowModalMap: true});
    await this.props.changeDate(nbHours);
    this.setState({isPlane: false});
    this.setState({isShowModalMap: false});
    this.props.checkDestination(destination);
  } 

  changeMarkersDestinations = (markers) => this.setState({markers: markers})

  // Clues
  showModalClue = () => {
    this.hideAll();
    this.setState({isShowModalClue: true});
  }
  hideModalClue = () => this.setState({isShowModalClue: false})

  // Crime 
  showModalCrime = () => {
    this.hideAll();
    this.setState({isShowModalCrime: true});
  }

  hideModalCrime = () => {
    this.props.hideCrime();
    this.setState({isShowModalCrime: false})
  }

  render() {
    const { lang, Cases, viewClue, viewCrime, viewArrest, changeDate, userCase, userStep, isWrongDestination, tmpDestination, place, changeSex, changeHobby, changeHair, changeFeature, changeVehicule, sex, hair, hobby, vehicule, feature, changeWarrant } = this.props;
    const destinations = isWrongDestination ? [Cases[userCase][lang].steps[userStep].city.name] : Cases[userCase][lang].steps[userStep].destinations;
    const cityStart = isWrongDestination ? tmpDestination : Cases[userCase][lang].steps[userStep].city.name;
    const clues = isWrongDestination ? [] : Cases[userCase][lang].steps[userStep].clues;
    return (
      <div>
        {
          this.state.isShowModalDestinations || this.state.isShowModalDepart || this.state.isShowModalClue || this.state.isShowModalCrime || this.state.isShowModalMap
          ? <div className="cs-backdrop"></div>
          : ''
        }
        <div className="cs-btns">
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalDestinations ? 'cs-btn cs-btn-hidden-mobile cs-btn-hide ' : 'cs-btn cs-btn-see cs-btn-hidden-mobile'} onClick={this.showModalDestinations}>
            <div className="cs-btn-inner" ></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalDepart ? 'cs-btn cs-btn-depart cs-btn-depart-hide' : 'cs-btn cs-btn-depart  cs-btn-depart-show'} onClick={this.showModalDepart}>
            <div className="cs-btn-inner" ></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalClue ? 'cs-btn cs-btn-search cs-btn-hide' : 'cs-btn cs-btn-search cs-btn-see'} onClick={this.showModalClue}>
            <div className="cs-btn-inner"></div>
          </div>
          <div onMouseEnter={() => this.soundHover.play()} className={this.state.isShowModalCrime ? 'cs-btn cs-btn-crime cs-btn-hide' : 'cs-btn cs-btn-crime cs-btn-see'} onClick={this.showModalCrime}>
            <div className="cs-btn-inner"></div>
          </div>        
        </div>
        <div>
          <audio preload="auto" ref={this.setSoundHover} src={soundHover}> </audio>
        </div>
        {
          this.state.isShowModalDestinations
          ? <ModalDestinations lang={lang} depart={this.state.isDepart} destinations={destinations} hide={this.hideModalDestinations}></ModalDestinations>
          : ''
        }
        {
          this.state.isShowModalDepart
          ? <ModalDestinations goTo={this.goTo} hoverTo={this.hoverTo} lang={lang} depart={this.state.isDepart} destinations={destinations} hide={this.hideModalDepart}></ModalDestinations>
          : ''
        }
        {
          this.state.isShowModalMap && !isWrongDestination
          ? <ModalMap isPlane={this.state.isPlane} place={place} hoverDestination={this.state.hoverDestination} changeMarkersDestinations={this.changeMarkersDestinations} lang={lang} cityStart={cityStart} destinations={destinations}></ModalMap>
          : ''
        }
        {
          this.state.isShowModalMap && isWrongDestination
          ? <ModalMap isPlane={this.state.isPlane} place={place} hoverDestination={this.state.hoverDestination} changeMarkersDestinations={this.changeMarkersDestinations} lang={lang} cityStart={cityStart} destinations={destinations}></ModalMap>
          : ''
        }
        {
          this.state.isShowModalClue 
          ? <ModalClues  lang={lang} clues={clues} viewClue={viewClue} viewArrest={viewArrest} hideModalClue={this.hideModalClue} ></ModalClues>
          : ''
        }
        {
          this.state.isShowModalCrime
          ? <ModalCrime 
            lang={lang} 
            viewCrime={viewCrime} 
            changeDate={changeDate} 
            hideModalCrime={this.hideModalCrime} 
            changeSex={changeSex} 
            changeHobby={changeHobby} 
            changeHair={changeHair}  
            changeFeature={changeFeature}  
            changeVehicule={changeVehicule}
            changeWarrant={changeWarrant}
            sex={sex}
            hair={hair}
            hobby={hobby}
            feature={feature}
            vehicule={vehicule}

            ></ModalCrime>
          : ''
        }
      </div>
    );
  }
}

export default Buttons;