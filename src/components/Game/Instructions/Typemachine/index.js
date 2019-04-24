import React, { Component } from 'react';
import './index.css';
import soundTypewriter from './sound-typewriter-2.mp3';

class Typemachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      countSound: 0
    }
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
    if (this.mySound.duration > 0 && !this.mySound.paused) {

    }
    else {
      this.mySound.play();
    }
  } 

  pauseSound() { 
    if (this.mySound.duration > 0 && !this.mySound.paused) {
      
    } else {
      this.mySound.pause();
    }
  }

  typeWriter = (s, i=0) => {
    if (this.myDiv && i < s.length) {
      this.myDiv.innerHTML += s.charAt(i);
      i++;
      if(i>5) { 
        this.props.setScroll(); 
      }
      if(i===10 || i === 30 || i === 50 || i === 70 || i === 100 || i === 130 || i === 160 || i === 200) {
        this.mySound.play();
      }
      setTimeout(() => this.typeWriter(s, i), 40);
    }
    else {
      this.pauseSound();
      if(this.props.changeStep){
        this.props.changeStep(parseInt(this.props.step)+1)
      } 
    }
  }

  componentDidMount() {
    if(this.myDiv) {
      setTimeout(() => this.typeWriter(this.props.mystring), 500);
    }
  }

  componentWillUnmount() {
    this.pauseSound();
  }

  render() {
    return (
      <div className={this.props.mb}>
        <audio ref={this.setmySound} src={soundTypewriter}> </audio>
        <span ref={this.typewriter}></span>
      </div>
    );
  }
}

export default Typemachine;