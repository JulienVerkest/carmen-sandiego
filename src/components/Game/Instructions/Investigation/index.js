import React, { Component } from 'react';
import Typemachine from '../Typemachine';
import ButtonNext from '../ButtonNext';

class Investigation extends Component {
  componentDidMount() {
    this.props.setScroll();
  }
  render() {
    const { setScroll, step, onChangeStep, user, userRank, Cases, lang, userCase, Config } = this.props;
    return (
      <div>
        <Typemachine mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[0]} step={step} changeStep={onChangeStep} > </Typemachine>
        {
          step > 10
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[1]} step={step} changeStep={onChangeStep} > </Typemachine>
          : ''
        }
        {
          step > 11
          ? <Typemachine mb={'mb-4'} setScroll={setScroll} mystring={Cases[userCase][lang].start[2]}   step={step} changeStep={onChangeStep}  > </Typemachine>
          : ''
        }
        {
          step > 12
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={14} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 13
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[3]} step={step} changeStep={onChangeStep} > </Typemachine>
          : ''
        }
        {
          step > 14
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[4]}  step={step} changeStep={onChangeStep} > </Typemachine>
          : ''
        }
        {
          step > 15
          ? <ButtonNext mb={'mb-4'} step={step}  setScroll={setScroll} onChangeStep={onChangeStep} nextStep={17} >{Config[lang].buttons.continue} </ButtonNext>
          : ''
        }
        {
          step > 16
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[userCase][lang].start[5]} step={step} changeStep={onChangeStep} > </Typemachine>
          : ''
        }
        {
        step > 17
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={`${Cases[userCase][lang].start[6]} ${userRank} ${user} `}  step={step} changeStep={onChangeStep} > </Typemachine>
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
