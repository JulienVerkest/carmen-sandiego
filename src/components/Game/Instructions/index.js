import React, { Component } from 'react';
import User from './User';
import Investigation from './Investigation';
import EndCaseSuccess from './EndCaseSuccess';
import EndCaseFail from './EndCaseFail';
import './index.css';

class Instructions extends Component {
  constructor(props){
    super(props);
    this.myDiv = null;
    this.instructions = element => {
      this.myDiv = element;
    };
    this.setScroll = this.setScroll.bind(this);
  }

  setScroll() {
    this.myDiv.scrollTo(0, this.myDiv.scrollHeight);
  }

  render(){
    return(
      <div className={(this.props.step !== 20) ? 'cs-instructions' : ''}>
        <div className="cs-instructions-inner" ref={this.instructions}>
          {
            this.props.step < 14
             ? <User 
                onChangeStep={this.props.onChangeStep}
                onChangeUser={this.props.onChangeUser}
                isUserValid={this.props.isUserValid}
                user={this.props.user}
                isNewUser={this.props.isNewUser}
                userRank={this.props.userRank}
                step={this.props.step}
                createUser={this.props.createUser}
                loadUser={this.props.loadUser}
                setScroll={this.setScroll}
                Config={this.props.Config}
                lang={this.props.lang}
              />
            : ''
          }
          {
          this.props.step > 9 && this.props.step < 20
            ? <Investigation 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              userRank={this.props.userRank}
              user={this.props.user}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              />
            : ''
          }
          {
          this.props.step > 20 && this.props.warrant === this.props.Cases[this.props.userCase][this.props.lang].thief
            ? <EndCaseSuccess 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              user={this.props.user}
              restart={this.props.restart}
              />
            : ''
          }
          {
          this.props.step > 20 && (this.props.warrant !== this.props.Cases[this.props.userCase][this.props.lang].thief || this.props.isExpirationTime)
            ? <EndCaseFail 
              step={this.props.step}
              onChangeStep={this.props.onChangeStep}
              setScroll={this.setScroll}
              Config={this.props.Config}
              Cases={this.props.Cases}
              lang={this.props.lang}
              userCase={this.props.userCase} 
              userStep={this.props.userStep}
              user={this.props.user}
              isExpirationTime={this.props.isExpirationTime}
              restart={this.props.restart}
              />
            : ''
          }
        </div>
      </div>
    );
  }
}
export default Instructions;