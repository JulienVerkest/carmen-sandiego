import React, { Component } from 'react';
// import suspicious from './suspicious.gif';
// import arrest from './arrest.mp4';
import jail from './prison-empty.jpg'
import './index.css';

class Arrest extends Component {
  constructor(props) {
    super(props);
    this.myVideo = null;
    this.setMyVideo = element => {
      this.myVideo = element;
    }; 
  }

  componentDidMount() {
    const { onChangeStep } = this.props;
    if(this.myVideo) {
      this.myVideo.onended = function(e) {
        onChangeStep(23);
      };
    }
  }

  render(){
    const { warrant, Cases, lang, userCase } = this.props;
    return(
      <div>
        { 
          warrant === Cases[userCase][lang].thief
          ? <video className="cs-arrest" width="662" autoPlay height="470" ref={this.setMyVideo}>
              <source src="https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/arrest/arrest-compress.mp4" type="video/mp4"></source>
            </video>
          : <p className="cs-fail-message">
              <img src={jail} alt=""/>
            </p>
        }
      </div>
    )
  }
} 

export default Arrest;