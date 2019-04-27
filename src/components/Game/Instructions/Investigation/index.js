import React, { Component } from 'react';
import Typewriter from '../Typewriter';
import ButtonNext from '../ButtonNext';

class Investigation extends Component {
  componentDidMount() {
    this.props.setScroll();
  }
  render() {
    const { setScroll, step, onChangeStep, user, userRank, Cases, lang, userCase, Config } = this.props;
    return (
      <div>
        <Typewriter mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[0]} step={step} changeStep={onChangeStep} > </Typewriter>
        {
          step > 10
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[1]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 11
          ? <Typewriter mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[2]}   step={step} changeStep={onChangeStep}  > </Typewriter>
          : ''
        }
        {
          step > 12
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={14} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 13
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[3]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 14
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[4]}  step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 15
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={17} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 16
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[5]} step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
        step > 17
          ? <Typewriter mb={'mb-8'} setScroll={setScroll} mystring={`${Cases[userCase][lang].start[6]} ${userRank} ${user} `}  step={step} changeStep={onChangeStep} > </Typewriter>
          : ''
        }
        {
          step > 18
          ? <ButtonNext mb={'mb-4'} step={step} setScroll={setScroll} onChangeStep={onChangeStep} nextStep={20} >{Config[lang].buttons.game} </ButtonNext>
          : ''
        }
      </div>
    );
  }
} 

export default Investigation;
