import React, { Component } from 'react';
import './index.css';
import ModalDestinations from '../Modals/Destinations';
import ModalMap from '../Modals/Map';
import ModalClues from '../Modals/Clues';

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
      isPlane: false,
      markers: null
    }

    this.goTo = this.goTo.bind(this);
  }

  // Hide All Modal
  hideAll = () => {
    this.setState({isDepart: false});
    this.setState({isShowModalDestinations: false});
    this.setState({isShowModalDepart: false});
    this.setState({isShowModalClue: false});
    this.setState({isShowModalCrime: false});
    this.props.hideClue();
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
    this.setState({isShowModalMap: true});
    this.setState({isPlane: true});
    await this.props.changeDate(nbHours);
    this.setState({isPlane: false});
    this.setState({isShowModalMap: false});
    this.props.changePlace(destination);
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

  render() {
    const { lang, Cases, displayClue, userCaseStep, isWrongDestination, place  } = this.props;
    const destinations = isWrongDestination ? [Cases[userCaseStep[0]][lang].steps[userCaseStep[1]].city.name] : Cases[userCaseStep[0]][lang].steps[userCaseStep[1]].destinations;
    const cityStart = isWrongDestination ? place : Cases[userCaseStep[0]][lang].steps[userCaseStep[1]].city.name;
    const clues = isWrongDestination ? [] : Cases[userCaseStep[0]][lang].steps[userCaseStep[1]].clues;
    return (
      <div className="cs-btns">
        <div className={this.state.isShowModalDestinations ? 'cs-btn cs-btn-hide' : 'cs-btn cs-btn-see'} onClick={this.showModalDestinations}>
          <div className="cs-btn-inner" ></div>
        </div>
        <div className={this.state.isShowModalDepart ? 'cs-btn cs-btn-depart cs-btn-depart-hide' : 'cs-btn cs-btn-depart  cs-btn-depart-show'} onClick={this.showModalDepart}>
          <div className="cs-btn-inner" ></div>
        </div>
        <div className={this.state.isShowModalClue ? 'cs-btn cs-btn-search cs-btn-hide' : 'cs-btn cs-btn-search cs-btn-see'} onClick={this.showModalClue}>
          <div className="cs-btn-inner"></div>
        </div>
        <div className="cs-btn cs-btn-crime">
          <div className="cs-btn-inner"></div>
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
          this.state.isShowModalMap
          ? <ModalMap isPlane={this.state.isPlane} hoverDestination={this.state.hoverDestination} changeMarkersDestinations={this.changeMarkersDestinations} lang={lang} cityStart={cityStart} destinations={destinations}></ModalMap>
          : ''
        }
        {
          this.state.isShowModalClue
          ? <ModalClues  lang={lang} clues={clues} displayClue={displayClue} hideModalClue={this.hideModalClue} ></ModalClues>
          : ''
        }
        
      </div>
    );
  }
}

export default Buttons;