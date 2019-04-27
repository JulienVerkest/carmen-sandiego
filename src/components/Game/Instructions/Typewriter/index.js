import React, { Component } from 'react';
import './index.css';
import soundTypewriter from './typewriter.mp3';

class Typewriter extends Component {
  constructor(props){
    super(props);
    this.myDiv = null;
    this.mySound = null;
    this.typewriter = element => {
      this.myDiv = element;
    }; 
    this.setmySound = element => {
      this.mySound = element;
    };

    this.playSound = this.playSound.bind(this);
    this.pauseSound = this.pauseSound.bind(this);
  }

  playSound() {
    if(this.mySound && (this.mySound.duration === 0 || this.mySound.paused)){

      this.mySound.play().catch(function() {

       });
    }
  } 

  pauseSound() { 
    if(this.mySound){
      this.mySound.pause();
    }
  }

  typeWriter = (s, i=0) => {
    if (this.myDiv && i < s.length) {
      this.myDiv.innerHTML += s.charAt(i);
      i++;
      this.props.setScroll();
      this.playSound();
      setTimeout(() => this.typeWriter(s, i), 35);
    }
    else {
      this.pauseSound();
      if(this.props.changeStep){
        this.props.changeStep(parseInt(this.props.step)+1)
      } 
    }
  }

  componentDidMount() {
    if(this.myDiv && this.mySound) {
      setTimeout(() => this.typeWriter(this.props.mystring), 100);
    }
  }

  componentWillUnmount() {
    this.pauseSound();
  }

  render() {
    return (
      <div className={this.props.mb}>
        <audio autoPlay preload="auto" ref={this.setmySound} src={soundTypewriter}> </audio>
        <span ref={this.typewriter}></span>
      </div>
    );
  }
}

export default Typewriter;