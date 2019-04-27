import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import Instructions from './Instructions';
import PlaceAndDate from './PlaceAndDate';
import Buttons from './Buttons';
import Debug from '../Debug';
import moment from 'moment';
import Cases from '../GameData/Data/Cases';
import Config from '../GameData/Data/Config';
import Dossiers from '../GameData/Data/Dossiers';
import Picture from './Modals/Picture';
import ClueBubble from './ClueBubble';
import WrongDestination from './WrongDestination';
import Arrest from './Arrest';
import soundClock from './PlaceAndDate/clock-2.mp3';
import './index.css';

const startDate = moment('2019-03-25 09');
const endDate = moment('2019-03-31 17');
const initialState = {
  user: '',
  userCase: 0, // First arg is the n° case Cases[0][this.state.lang].steps[0]
  userStep: 0, //  second arg n° step :  Cases[0][this.state.lang].steps[0]
  lang: 'en',
  isUserValid: false,
  isNewUser: true,
  userRank: 'Rookie',
  step: 1,
  place: 'Headquarters',
  mydate: startDate,
  isViewClue: false,
  isViewCrime: false,
  isViewArrest: false,
  isWrongDestination: false,
  tmpDestination: '',
  isExpirationTime: false,
  clue: '',
  warrant: null,
  sex: '',
  hobby: '',
  hair: '',
  feature: '',
  vehicule: '',
  HISTORY: []
};

class Interface extends Component {
  constructor(props){
    super(props);
    this.state = initialState

    this.mySoundClock = null;
    this.setMySoundClock = element => {
      this.mySoundClock = element;
    };
    this.playSoundClock = this.playSoundClock.bind(this);
    this.pauseSoundClock = this.pauseSoundClock.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeStep = this.onChangeStep.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.wait = this.wait.bind(this);
    this.viewClue = this.viewClue.bind(this);
  }

  componentDidMount() {
    this.onChangeStep(1);
  }

  /*
   ** USER STEPS 
  */
  onChangeUser(event) {
    if(event.target.value.length > 1) {
      this.setState({isUserValid: true})
    }
    this.setState({ user: event.target.value });
  }

  onChangeStep(step) {
    this.setState({ step: step });
    if(step === 20) {
      this.changePlace(Cases[this.state.userCase][this.state.lang].steps[this.state.userStep].city.name);
    }
  }

  createUser() {
    // TO DO createUSER in Database or IndexDB
    this.setState({ isNewUser: true });
    this.onChangeStep(7);
  }

  loadUser() {
    // TO DO check if user exists in Database or IndexDB
    this.setState({ isNewUser: false });
    this.onChangeStep(7);
  }

  // SOUND
  playSoundClock() {
    this.mySoundClock.play(); 
  } 

  pauseSoundClock() { 
    this.mySoundClock.pause(); 
  }

  /* 
   * GAME
  */
  async wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  // Display a clue consume 2 hours 
  async viewClue(clue) {
    await this.changeDate(2);
    await this.setState({ clue: clue});
    await this.setState({ isViewClue: true});

    // history
    let copyHISTORY = [...this.state.HISTORY];
    const name = clue.Place.key;
    copyHISTORY[this.state.HISTORY.length-1][name] = clue; 
    this.setState({HISTORY: copyHISTORY});
  }  

  // Display a clue consume 2 hours
  viewArrest = () => {
    this.setState({isViewArrest: true});
    this.onChangeStep(21);
  }

  // Hide Clue
  hideClue = () => this.setState({ isViewClue: false});

  // Display Crime
  viewCrime = () => this.setState({isViewCrime: true});
  changeSex = (sex) => this.setState({sex: sex});
  changeHair = (hair) => this.setState({hair: hair});
  changeHobby = (hobby) => this.setState({hobby: hobby});
  changeVehicule = (vehicule) => this.setState({vehicule: vehicule});
  changeFeature = (feature) => this.setState({feature: feature});

  // Hide Crime
  hideCrime = () => this.setState({isViewCrime: false});

  // Config Change lang
  changeLang = (lang) => this.setState({ lang: lang });
  
  // Change Place
  changePlace = (place) => {
    this.setState({ place: place});

    // history
    this.setState({HISTORY: [...this.state.HISTORY, { place } ]});
  } 

  async changeDate(hours) {
    // Sleeping // Add hours if > 10pm, case go on at 8am
    const prevMyDate = moment(this.state.mydate);
    const nextMyDate = moment(this.state.mydate).add(hours, 'hours');
    let speed = 500;
    if(parseInt(nextMyDate.format('H')) > 22 || (parseInt(nextMyDate.format('H')) < parseInt(prevMyDate.format('H')))) {
      if(parseInt(nextMyDate.format('H')) === 23) {
        hours = hours + 9;
      }
      if(parseInt(nextMyDate.format('H')) === 24) {
        hours = hours + 8;
      }
      if(parseInt(nextMyDate.format('H')) < parseInt(prevMyDate.format('H'))) {
       hours = hours + 8 - parseInt(nextMyDate.format('H'));
      }
      speed = 200;
    }

    // Add hours 
    for (let i=1;i<=hours;i++) {
      this.playSoundClock();
      await this.wait(speed);
      await this.setState({ mydate: moment(this.state.mydate).add(1, 'hours')}); 
      this.checkExpirationDate();
      this.pauseSoundClock();
    }
  } 

  checkExpirationDate = () => {
    if(moment(this.state.mydate).isAfter(endDate)) {
      this.onChangeStep(21);
      this.setState({ isExpirationTime: true});
    }
  }

  // Change Warrant
  changeWarrant = (warrant) => this.setState({warrant: warrant});

  // Check destination
  checkDestination = (destination) => {
    if(this.state.isWrongDestination) {
      this.setState({isWrongDestination: false});
      this.setState({tmpDestination: ''});
    }
    else if(Cases[this.state.userCase][this.state.lang].steps[this.state.userStep + 1].city.name === destination) {
      this.nextDestination();
    } else {
      this.setState({isWrongDestination: true});
      this.setState({tmpDestination: destination});
    }
  }

  nextDestination = () => this.setState({userStep: this.state.userStep + 1});

  nextCase = () => this.setState({userCase: this.state.userCase + 1});

  // Restart to step 20
  restart = () => {
    const { user } = this.state;
    this.setState(initialState);
    this.setState({HISTORY: []});
    this.setState({userStep:0});
    this.setState({user: user});
    this.setState({step: 20});
    this.changePlace(Cases[this.state.userCase][this.state.lang].steps[0].city.name);
  }

  saveStateToLocalStorage = (nme) => {
    let mySave = 'mysave';
    localStorage.setItem(mySave, JSON.stringify(this.state));
  }

  hydratestateFromLocalStorage = () => {
    if (localStorage.hasOwnProperty('mysave')) {
      let value = JSON.parse(localStorage.getItem('mysave'));
      value.mydate = moment(value.mydate)
      this.setState(value)
    }
  }

  render() {
    const { user, lang, isUserValid, isNewUser, userRank, step, mydate, place, isViewClue, clue, userCase, userStep, isWrongDestination, tmpDestination, isExpirationTime, isViewCrime, isViewArrest, sex, hair, vehicule, feature, hobby, warrant, HISTORY } = this.state
    return (
      <div>
        <Menu user={user} step={step} saveStateToLocalStorage={this.saveStateToLocalStorage} hydratestateFromLocalStorage={this.hydratestateFromLocalStorage}  Dossiers={Dossiers} Config={Config} lang={lang} changeLang={this.changeLang} userRank={userRank}></Menu>
        <Container>
          <Row id="cs">
            <Col md="5">
              <section className="cs-zone cs-zone-1 cs-place-date">
                <div className="cs-zone-inner">
                  <PlaceAndDate place={place} mydate={mydate} lang={lang} Cases={step === 20 ? Cases : ''}></PlaceAndDate>
                </div>
              </section>
              <section className="cs-zone cs-zone-2">
                <div className="cs-zone-inner" >
                  {
                    step !== 20
                    ?  <Instructions 
                          onChangeStep={this.onChangeStep}
                          onChangeUser={this.onChangeUser}
                          isUserValid={isUserValid}
                          user={user}
                          isNewUser={isNewUser}
                          userRank={userRank}
                          step={step}
                          createUser={this.createUser}
                          loadUser={this.loadUser}
                          Cases={Cases}
                          lang={lang}
                          userCase={userCase}
                          userStep={userStep}
                          Config={Config}
                          warrant={warrant}
                          isExpirationTime={isExpirationTime}
                          restart={this.restart}
                        >
                        </Instructions>
                    : ''
                  }
                  {
                    step === 20 
                    ? <Picture place={place} ></Picture>
                    : ''
                  }
                </div>
              </section>
            </Col>
            <Col md="7">
              <section className="cs-zone cs-zone-3">
                <div className="cs-zone-inner">
                {
                  isViewArrest
                  ? <Arrest warrant={warrant} Cases={Cases} lang={lang}  userCase={userCase} userStep={userStep} onChangeStep={this.onChangeStep}></Arrest>
                  : ''
                }

                {
                  isViewClue
                  ? <ClueBubble clue={clue} HISTORY={HISTORY} Cases={Cases} lang={lang} userCase={userCase} userStep={userStep}></ClueBubble>
                  : ''
                }
                {
                  isWrongDestination
                  ? <WrongDestination clue={{Guy:{key:'curator'},Clue: 'Whoops! 404 not found error. I think you\'re are lost.' }}></WrongDestination>
                  : ''
                }
                {
                  !isViewClue && !isViewCrime && !isWrongDestination && !isViewArrest && step === 20
                  ? <div>
                      <div className="cs-description">
                        {Cases[userCase][lang].steps[userStep].city.description}
                      </div>
                    </div>
                  : ''
                }
                </div>
              </section>
              <section className="cs-zone cs-zone-4">
                <div className="cs-zone-inner">
                  {
                    step === 20 
                    ? <Buttons 
                       userCase={userCase} 
                       userStep={userStep}
                       isWrongDestination={isWrongDestination}
                       tmpDestination={tmpDestination}
                       place={place}
                       lang={lang} 
                       Cases={Cases} 
                       sex={sex}
                       hair={hair}
                       hobby={hobby}
                       vehicule={vehicule}
                       feature={feature}
                       checkDestination={this.checkDestination}
                       changePlace={this.changePlace} 
                       changeDate={this.changeDate} 
                       viewClue={this.viewClue} 
                       hideClue={this.hideClue} 
                       viewCrime={this.viewCrime}
                       hideCrime={this.hideCrime}
                       viewArrest={this.viewArrest}
                       changeSex={this.changeSex} 
                       changeHobby={this.changeHobby} 
                       changeHair={this.changeHair}  
                       changeFeature={this.changeFeature}  
                       changeVehicule={this.changeVehicule} 
                       changeWarrant={this.changeWarrant} 
                       >
                       </Buttons> 
                    : ''
                  }
                </div>
              </section>
            </Col>
          </Row>
          {
 
          <Row>
            <Col>
              <Debug state={this.state} ></Debug>
            </Col>
          </Row>

          }
          <audio  
            ref={this.setMySoundClock}
            src={soundClock}>
          </audio>
        </Container>
      </div>
    );
  }
}

export default Interface;
 