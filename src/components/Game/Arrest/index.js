import React, { Component } from 'react';
// import suspicious from './suspicious.gif';
// import arrest from './arrest.mp4';
// import jail from './prison-empty.jpg'
import './index.css';
// import { process } from 'ipaddr.js';

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
    let arrestOrFail = warrant === Cases[userCase][lang].thief ? 'arrest-compress.mp4' : 'fail-compress.mp4';
    return(
      <div>
        <video className="cs-arrest" width="662" autoPlay height="470" ref={this.setMyVideo}>
          <source src={`https://www.julien-verkest.fr/carmen-sandiego-reactjs/assets/arrest/${arrestOrFail}`} type="video/mp4"></source>
        </video>
      </div>
    )
  }
} 

export default Arrest;