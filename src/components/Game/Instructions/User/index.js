import React, { Component } from 'react';
import './index.css';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';

class Step1 extends Component {
  render() {
    const {onChangeStep, onChangeUser, step, isUserValid, user, Config, lang} = this.props;
    const userLang = Config[lang].user;
    return (
      <div>
        <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.step1} step={step} changeStep={onChangeStep} ></Typewriter>
        {
          step > 1
          ? <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.step2} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }
        {
          step > 2
          ? <div className="cs-input-name"><input placeholder="Your nickname" maxLength="20" type="text"  onChange={onChangeUser} disabled={step > 3} />
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
    const {onChangeStep, createUser, loadUser, step, Config, lang} = this.props;
    const userLang = Config[lang];
    return (
      <div>
        <Typewriter mb={'mb-0'} setScroll={this.props.setScroll} mystring={userLang.user.step4} step={step} changeStep={onChangeStep} ></Typewriter>
        {
          step > 4 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={userLang.user.step5} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }   
        {
          step > 5
          ? <div>
              <button style={{marginRight:'5px'}} disabled={step > 6} onClick={createUser}>{userLang.buttons.yes}</button>  
              <button disabled={step > 6} onClick={loadUser}>{userLang.buttons.no}</button><br/><br/>
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
    const {onChangeStep, step, isNewUser, user, userRank, Config, lang} = this.props;
    const userLang = Config[lang];
    return (
      <div >
        {
          isNewUser 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step7a}, ${user}`} step={step} changeStep={onChangeStep} ></Typewriter>
          : <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step7b}, ${user}`} step={step} changeStep={onChangeStep} ></Typewriter>
        }
        {
          step > 7 
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring ={`${userLang.user.step8} ${userRank}`} step={step} changeStep={onChangeStep} ></Typewriter>
          : ''
        }
        {
          step > 8
          ? <ButtonNext step={step} mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={10} >{userLang.buttons.start} </ButtonNext>
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
          Config={this.props.Config}
          lang={this.props.lang}
        />
        {
          this.props.step > 3
          ?  <Step2 
              createUser={this.props.createUser} 
              loadUser={this.props.loadUser} 
              step={this.props.step} 
              onChangeStep={this.props.onChangeStep} 
              setScroll={this.props.setScroll}
              Config={this.props.Config}
              lang={this.props.lang}
            /> 
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
              Config={this.props.Config}
              lang={this.props.lang}
            />
          : ''
        }
      </div>
    );
  }
} 

export default User;
