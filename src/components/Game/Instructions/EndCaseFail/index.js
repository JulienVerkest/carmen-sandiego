import React, { Component } from 'react';
import Typemachine from '../Typemachine';
import './index.css';

class EndCaseFail extends Component {
  render() {
    const {onChangeStep, step, Cases, userCase, lang, Config, isExpirationTime } = this.props;
    return (
      <div>
        <Typemachine mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Cases[userCase][lang].endFail.loser} step={step} changeStep={onChangeStep} > </Typemachine>
        {
          step > 21 && isExpirationTime
          ? <div>
              <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={Cases[userCase][lang].endFail.expiration} step={step} changeStep={onChangeStep} > </Typemachine>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
        {
          step > 21 && !isExpirationTime
          ? <div>
              <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].endFail.noWarrant} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} > </Typemachine>
              <button onClick={() => this.props.restart()}>{Config[lang].buttons.restart}</button>  
             </div>
          : ''
        }
      </div>
    )
  }
}

export default EndCaseFail;