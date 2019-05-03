import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import './index.css';

class EndCaseFail extends Component {
  render() {
    const {onChangeStep, step, Cases, userCase, lang, Config, isExpirationTime } = this.props;
    return (
      <div>

        <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.wait} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 22
          ?  <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endFail.loser} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 23 && isExpirationTime
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={Config[lang].endFail.expiration} step={step} changeStep={onChangeStep} > </Typewriter>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
        {
          step > 23 && !isExpirationTime
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endFail.noWarrant} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} > </Typewriter>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
      </div>
    )
  }
}

export default EndCaseFail;