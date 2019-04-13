import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import Instructions from './Instructions';
import PlaceAndDate from './PlaceAndDate';
import Buttons from './Buttons';
import Debug from '../Debug';
import moment from 'moment';
import Cases from '../Game/Data/Cases';
import Picture from './Modals/Picture';
import ClueBubble from './ClueBubble';
import soundClock from './PlaceAndDate/clock-2.mp3';

import './index.css';

const startDate = moment('2019-03-25 09');

class Interface extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'julien',
      userCaseStep: [0,0], // First arg is the n° case, second arg n° step :  Cases[0][this.state.lang].steps[0]
      lang: 'en',
      isUserValid: true,
      isNewUser: true,
      userRank: 'Rookie',
      step: 20,
      place: 'Headquarters',
      mydate: startDate,
      isSound: true,
      isViewClue: false,
      isWrongDestination: false,
      clue: ''
    };

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
    this.displayClue = this.displayClue.bind(this);
  }

  componentDidMount() {
    this.onChangeStep(20);
  }

  componentWillUnmount() { 

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
      this.changePlace(Cases[this.state.userCaseStep[0]][this.state.lang].steps[this.state.userCaseStep[1]].city.name);
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
  async displayClue(clue) {
    await this.changeDate(2);
    await this.setState({ clue: clue});
    await this.setState({ isViewClue: true});
  }  
  hideClue = () => this.setState({ isViewClue: false});
  changeLang = (lang) => this.setState({ lang: lang });
  changePlace = (place) => this.setState({ place: place});

  async changeDate(hours) {
    // Sleeping // Add hours if > 10pm, case go on at 8am
    const prevMyDate = moment(this.state.mydate);
    const nextMyDate = moment(this.state.mydate).add(hours, 'hours');
    console.log()
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
    }

    // Add hours 
    for (let i=1;i<=hours;i++) {
      this.playSoundClock();
      await this.wait(100);
      await this.setState({ mydate: moment(this.state.mydate).add(1, 'hours')}); 
      this.pauseSoundClock();
    }
  } 

  checkDestination = (destination) => {
    if(this.state.isWrongDestination) {
      this.setState({isWrongDestination: false});
    }
    else if(Cases[this.state.userCaseStep[0]][this.state.lang].steps[this.state.userCaseStep[1] + 1].city.name === destination) {
      this.nextDestination();
    } else {
      this.setState({isWrongDestination: true});
    }
  }

  nextDestination = () => this.setState({userCaseStep: [this.state.userCaseStep[0],this.state.userCaseStep[1] + 1]});
  nextCase = () => this.setState({userCaseStep: [this.state.userCaseStep[0] + 1,this.state.userCaseStep[1]]});

  render() {
    const { user, lang, isUserValid, isNewUser, userRank, step, mydate, place, isSound, isViewClue, clue, userCaseStep, isWrongDestination } = this.state
    return (
      <div>
        <Menu user={user} lang={lang} changeLang={this.changeLang}></Menu>
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
                    step < 20
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
                          isSound={isSound}
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
                  isViewClue
                  ? <ClueBubble clue={clue} isVilain Cases={Cases} lang={lang} userCaseStep={userCaseStep}></ClueBubble>
                  : ''
                }
                {
                  isWrongDestination
                  ? <ClueBubble clue={{Guy:'Curator',Clue: 'Whoops! 404 not found error. I think you\'re are lost.' }} ></ClueBubble>
                  : ''
                }
                {
                  !isViewClue && !isWrongDestination
                  ? <div>
                      <div className="cs-description">
                        {Cases[userCaseStep[0]][lang].steps[userCaseStep[1]].city.description}
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
                       userCaseStep={userCaseStep} 
                       checkDestination={this.checkDestination}
                       isWrongDestination={isWrongDestination}
                       place={place}
                       lang={lang} 
                       Cases={Cases} 
                       changePlace={this.changePlace} 
                       changeDate={this.changeDate} 
                       displayClue={this.displayClue} 
                       hideClue={this.hideClue} 
                       >
                       </Buttons> 
                    : ''
                  }
                </div>
              </section>
            </Col>
          </Row>
          <Debug state={this.state} ></Debug>
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
 