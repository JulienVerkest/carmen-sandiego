import React, { Component } from 'react';
import './index.css';
import soundTypewriter from './sound-typewriter.mp3';

class Typemachine extends Component {
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
    this.mySound.play(); 
  } 

  pauseSound() { 
    this.mySound.pause(); 
  }

  componentDidMount() {
    const speed = 30;
    const typeWriter = (s, i=0) => {
      if (i < s.length) {
        this.myDiv.innerHTML += s.charAt(i);
        i++;
        if(i>5) { 
          this.playSound();
          this.props.setScroll(); 
        }
        setTimeout(() => typeWriter(s, i), speed);
      }
      else {
        this.pauseSound();
        if(this.props.changeStep){
          this.props.changeStep(parseInt(this.props.step)+1)
        } 
      }
    };
    setTimeout(() => typeWriter(this.props.mystring), 300);

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={this.props.mb}>
        <span ref={this.typewriter}></span>
        <audio  

            ref={this.setmySound}
            src={soundTypewriter}>
                Your browser does not support the
                <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default Typemachine;