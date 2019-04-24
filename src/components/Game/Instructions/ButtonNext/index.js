import React, { Component } from 'react';

class ButtonNext extends Component {
  componentDidMount() {
    this.props.setScroll(); 
  }

  render() {
    const { onChangeStep, nextStep, step, mb, children } = this.props;
    return(
      <button disabled={step >= nextStep} className={mb} onClick={() => onChangeStep(nextStep)}>{children}</button>
    )  
  }
}

export default ButtonNext;