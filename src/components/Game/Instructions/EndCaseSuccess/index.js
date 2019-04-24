import React, { Component } from 'react';
import Typemachine from '../Typemachine';
import ButtonNext from '../ButtonNext';
import './index.css';

class EndCaseSuccess extends Component {
  render() {
    const {onChangeStep, step, isSound, Cases, userCase, lang, Config, user} = this.props;
    return (
      <div>
        <Typemachine mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Cases[userCase][lang].endSuccess.wait} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
        {
          step > 22
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].endSuccess.thanks1} ${Cases[userCase][lang].steps[0].city.name} ${Cases[userCase][lang].endSuccess.thanks2} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
          step > 23
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].thief} ${Cases[userCase][lang].endSuccess.thanks3}`} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        } 
        {
          step > 24
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={Cases[userCase][lang].endSuccess.thanks4} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }   
        {
          step > 25
          ? <ButtonNext mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={27} isSound={isSound}>{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 26
          ? <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].endSuccess.thanks5} ${user} ${Cases[userCase][lang].endSuccess.thanks6}`} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        } 
        {
          step > 27
          ? <div>
              <Typemachine mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].endSuccess.ready} ${user}`} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
              <button style={{marginRight:'5px'}} disabled={step > 29} onClick={() => this.props.restart()}>{Config[lang].buttons.yes}</button>  
              <button disabled={step > 29} onClick={() => this.props.restart()}>{Config[lang].buttons.no}</button><br/><br/>
            </div>
          : ''
        }
      </div>
    )
  }
}

export default EndCaseSuccess;