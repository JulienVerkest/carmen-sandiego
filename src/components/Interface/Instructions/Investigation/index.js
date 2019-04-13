import React, { Component } from 'react';
import Typemachine from '../../../Typemachine';
import ButtonNext from '../ButtonNext';
import Cases from '../../../Game/Data/Cases';

class Investigation extends Component {
  componentDidMount() {
    this.props.setScroll();
  }
  render() {
    const { setScroll, step, onChangeStep, user, userRank, isSound } = this.props;
    return (
      <div>
        <Typemachine mb={'mb-4'} setScroll={setScroll} mystring={Cases[0].en.start[0]} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
        {
          step > 10
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[0].en.start[1]} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
          step > 11
          ? <Typemachine mb={'mb-4'} setScroll={setScroll} mystring={Cases[0].en.start[2]}   step={step} changeStep={onChangeStep} isSound={isSound} > </Typemachine>
          : ''
        }
        {
          step > 12
          ? <ButtonNext mb={'mb-4'} setScroll={setScroll} onChangeStep={onChangeStep} nextStep={14} isSound={isSound}>Press this button <br/>to continue </ButtonNext>
          : ''
        }
        {
          step > 13
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[0].en.start[3]} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
          step > 14
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[0].en.start[4]}  step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
          step > 15
          ? <ButtonNext mb={'mb-4'} setScroll={setScroll} onChangeStep={onChangeStep} nextStep={17} isSound={isSound}>Press this button <br/>to continue </ButtonNext>
          : ''
        }
        {
          step > 16
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={Cases[0].en.start[5]} step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
        step > 17
          ? <Typemachine mb={'mb-8'} setScroll={setScroll} mystring={`${Cases[0].en.start[6]} ${userRank} ${user} `}  step={step} changeStep={onChangeStep} isSound={isSound}> </Typemachine>
          : ''
        }
        {
          step > 18
          ? <ButtonNext mb={'mb-4'} setScroll={setScroll} onChangeStep={onChangeStep} nextStep={20} isSound={isSound}>Press this button <br/>to start the game </ButtonNext>
          : ''
        }
      </div>
    );
  }
} 

export default Investigation;
