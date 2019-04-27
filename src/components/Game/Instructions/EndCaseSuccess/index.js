import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';
import './index.css';

class EndCaseSuccess extends Component {
  render() {
    const {onChangeStep, step, Cases, userCase, lang, Config, user} = this.props;
    return (
      <div>
        <Typewriter mb={'mb-4'}  setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.wait} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 22
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.thanks1} ${Cases[userCase][lang].steps[0].city.name} ${Config[lang].endSuccess.thanks2} ${Cases[userCase][lang].thief}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 23
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Cases[userCase][lang].thief} ${Cases[userCase][lang].endSuccess.thanks3}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        } 
        {
          step > 24
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={Config[lang].endSuccess.thanks4} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }   
        {
          step > 25
          ? <ButtonNext mb={'mb-4'} setScroll={this.props.setScroll} onChangeStep={onChangeStep} nextStep={27}>{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 26
          ? <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.thanks5} ${user} ${Config[lang].endSuccess.thanks6}`} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        } 
        {
          step > 27
          ? <div>
              <Typewriter mb={'mb-4'} setScroll={this.props.setScroll} mystring={`${Config[lang].endSuccess.ready} ${user}`} step={step} changeStep={onChangeStep} > </Typewriter>
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