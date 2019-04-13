import React, { Component } from 'react';

class ButtonNext extends Component {
  componentDidMount() {
    this.props.setScroll(); 
  }

  render() {
    const { onChangeStep, nextStep, mb, children } = this.props;
    return(
      <button className={mb} onClick={() => onChangeStep(nextStep)}>{children}</button>
    )  
  }
}

export default ButtonNext;