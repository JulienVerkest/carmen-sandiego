import React, { Component } from 'react';
import './index.css';
import Typemachine from '../../../Typemachine';
import ButtonNext from '../Button';

class Step1 extends Component {
  render() {
    const {onChangeStep, onChangeUser, step, isUserValid, user} = this.props;
    return (
      <div>
        <Typemachine mb={'mb-0'} setScroll={this.props.setScroll} mystring ={'Detective at keyword'} step={step} changeStep={onChangeStep}></Typemachine>
        {
          step > 1
          ? <Typemachine mb={'mb-0'} setScroll={this.props.setScroll} mystring ={'please identify yourself:'} step={step} changeStep={onChangeStep}></Typemachine>
          : ''
        }
        {
          step > 2
          ? <div><input placeholder="" maxLength="20" type="text" className="cs-input-name" onChange={onChangeUser} disabled={step > 3} />
            <button disabled={!isUserValid || step > 3} onClick={() => onChangeStep(4)}>ok</button></div>
          : <b>{user}</b>  
        }
        <br/><br/>
      </div>
    );
  }  
}

class Step2 extends Component {
  componentDidMount() {
    this.props.setScroll(); // set Scroll
  }
  render() {
    const {onChangeStep, createUser, loadUser, step} = this.props;
    return (
      <div>
        <Typemachine mb={'mb-0'} setScroll={this.props.setScroll} mystring ={'There is no record of your name on Interpol files.'} step={step} changeStep={onChangeStep}></Typemachine>
        {
          step > 4 
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring ={'Are you new here?'} step={step} changeStep={onChangeStep}></Typemachine>
          : ''
        }   
        {
          step > 5
          ? <div>
              <button style={{marginRight:'5px'}} disabled={step > 6} onClick={createUser}>Yes</button>  
              <button disabled={step > 6} onClick={loadUser}>No</button><br/><br/>
            </div>
          : ''
        }
      </div>
    );
  }
} 

class Step3 extends Component {
  componentDidMount() {
    this.props.setScroll();
  }

  render() {
    const {onChangeStep, step, isNewUser, user, userRank} = this.props;
    return (
      <div >
        {
          isNewUser 
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`You have been identified, ${user}`} step={step} changeStep={onChangeStep}></Typemachine>
          : <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`We load your personal information, ${user}`} step={step} changeStep={onChangeStep}></Typemachine>
        }
        {
          step > 7 
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`Your current rank is ${userRank}`} step={step} changeStep={onChangeStep}></Typemachine>
          : ''
        }
        {
          step > 8
          ? <ButtonNext mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={10}>Press this button <br/>to start investigation </ButtonNext>
          : ''
        }
      </div>
    );
  }
}

class User extends Component {
  render() {
    return (
      <div>
        <Step1 
          onChangeUser={this.props.onChangeUser} 
          onChangeStep={this.props.onChangeStep}
          step={this.props.step} 
          isUserValid={this.props.isUserValid}
          user={this.props.user}
          setScroll={this.props.setScroll}
        />
        {
          this.props.step > 3
          ?  <Step2 createUser={this.props.createUser} loadUser={this.props.loadUser} step={this.props.step} onChangeStep={this.props.onChangeStep} setScroll={this.props.setScroll}  /> 
          : ''
        }
        {
          this.props.step > 6
          ? <Step3
              isNewUser={this.props.isNewUser}
              onChangeStep={this.props.onChangeStep}
              step={this.props.step} 
              user={this.props.user}
              userRank={this.props.userRank}
              setScroll={this.props.setScroll}  
            />
          : ''
        }
      </div>
    );
  }
} 

export default User;
