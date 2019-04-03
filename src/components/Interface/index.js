import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu';
import Instructions from '../Game/Instructions';
import PlaceAndDate from '../Game/PlaceAndDate';
import Buttons from '../Game/Buttons';
import Debug from '../Debug';
import moment from 'moment';
import paris from '../Game/Data/Cities/paris.jpg';
import Cases from '../Game/Data/Cases';
import './index.css';

class Interface extends Component {

  constructor(props){
    super(props);
    const startDate = moment('2019-03-25 09');
    this.state = {
      user: '',
      isUserValid: false,
      isNewUser: true,
      userRank: 'Rookie',
      step: 1,
      place: 'Headquarters',
      mydate: startDate.format("dddd, h a")
    };

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeStep = this.onChangeStep.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loadUser = this.loadUser.bind(this);
    this.keyFunction = this.keyFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyFunction, false);
  }

  keyFunction(event){
    if(event.keyCode === 27) {
      console.log("ESC")
    }
  }

  onChangeUser(event) {
    if(event.target.value.length > 1) {
      this.setState({isUserValid: true})
    }
    this.setState({ user: event.target.value });
  }

  onChangeStep(step) {
    this.setState({ step: step });
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

  render() {
    const { user, isUserValid, isNewUser, userRank, step, mydate, place } = this.state
    return (
      <div>
        <Menu user={user}></Menu>
        <Container>
          <Row id="cs">
            <Col md="5">
              <section className="cs-zone cs-zone-1 cs-place-date">
                <div className="cs-zone-inner">
                  <PlaceAndDate place={place} mydate={mydate} ></PlaceAndDate>
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
                        >
                        </Instructions>
                    : ''
                  }
                  {
                    step === 20
                    ? <img src={paris} alt="paris"/>
                    : ''
                  }
                </div>
              </section>
            </Col>
            <Col md="7">
              <section className="cs-zone cs-zone-3">
                <div className="cs-zone-inner">
                </div>
              </section>
              <section className="cs-zone cs-zone-4">
                <div className="cs-zone-inner">
                  {
                    step === 20 
                    ? <Buttons case={Cases}></Buttons> 
                    : ''
                  }
                </div>
              </section>
            </Col>
          </Row>
          <Debug state={this.state} ></Debug>
        </Container>
      </div>
    );
  }
}

export default Interface;