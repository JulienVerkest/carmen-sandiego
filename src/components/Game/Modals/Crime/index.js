/* eslint no-eval: 0 */
import React, { Component } from 'react';
import Config from '../../../GameData/Data/Config';
import Dossiers from '../../../GameData/Data/Dossiers';
import computer from './computer.jpg';
import computeGif from './compute.gif';
// import warrant from './warrant.jpg';

import './index.css';

class Crime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideWarrant: true,
      sex: '',
      hobby: '',
      hair: '',
      feature: '',
      vehicule: '',
      suspicious: [],
      computing: false 
    } 
    
    this.handleChange = this.handleChange.bind(this);
    this.compute = this.compute.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = Array.from(event.target.selectedOptions, item => item.value)[0];
    this.setState({[name]: value});
  }

  async compute() {
    const { sex, hobby, hair, feature, vehicule } = this.state;
    if(sex !== '' || hobby !== '' || hair !== '' || feature !== '' || vehicule !== '') {
      await this.setState({computing: true});
      await this.props.changeDate(2);
      this.setState({hideWarrant: false});
      this.props.changeSex(sex);
      this.props.changeHobby(hobby);
      this.props.changeHair(hair);
      this.props.changeFeature(feature);
      this.props.changeVehicule(vehicule);
      const DossiersSexFilter = sex ? Dossiers.filter(item => item[this.props.lang].sex.toLowerCase() === sex.toLowerCase()) : Dossiers;
      const DossiersHobbyFilter = hobby ? DossiersSexFilter.filter(item => item[this.props.lang].hobby.toLowerCase().includes(hobby.toLowerCase())) : DossiersSexFilter;
      const DossiersHairFilter = hair ? DossiersHobbyFilter.filter(item => item[this.props.lang].hair.toLowerCase().includes(hair.toLowerCase())) : DossiersHobbyFilter;
      const DossiersFeatureFilter = feature ? DossiersHairFilter.filter(item => item[this.props.lang].feature.toLowerCase().includes(feature.toLowerCase())) : DossiersHairFilter;
      const DossiersVehiculeFilter = vehicule ? DossiersFeatureFilter.filter(item => item[this.props.lang].vehicule.toLowerCase().includes(vehicule.toLowerCase())) : DossiersFeatureFilter;
      const suspicious = [];
      DossiersVehiculeFilter.map((item, index) => 
        suspicious.push(item[this.props.lang])
      )
      this.setState({suspicious: suspicious});
      suspicious.length === 1 ? this.props.changeWarrant(this.state.suspicious[0].name) : this.props.changeWarrant('');
      await this.setState({computing: false});
    }
  }

  componentDidMount() {
    this.props.viewCrime();

    // init 
    const { sex, hobby, hair, feature, vehicule } = this.props;
    this.setState({sex: sex});
    this.setState({hobby: hobby});
    this.setState({hair: hair});
    this.setState({feature: feature});
    this.setState({vehicule: vehicule}); 
  }

  render(){
    const { lang, hideModalCrime } = this.props;
    const { sex, hobby, hair, feature, vehicule, computing } = this.state;
    const crimeOptions = Config[lang].crime;
    return(
      <div className="cs-crime" style={{backgroundImage:`url(${computer})`}}>
        <div className={computing ? 'cs-crime-compute-gif cs-crime-computing-gif' : 'cs-crime-compute-gif'} style={{backgroundImage:`url(${computeGif})`}}></div>
        <div className={this.state.hideWarrant ? 'cs-crime-inner cs-crime-block' : 'cs-crime-inner'} >
          <form  >   
          {crimeOptions.map((item, key) =>            
            <div key={key} className="cs-crime-form-item">
              <label>{crimeOptions[key].label}</label>
              <select name={crimeOptions[key].key} onChange={this.handleChange} value={eval(crimeOptions[key].key) !== '' ? eval(crimeOptions[key].key) : undefined}  >
                  <option key="0" value=""></option>
                {crimeOptions[key].options.map((item,idx) => 
                  <option key={idx} value={item.key} >{item.value}</option>
                )}
              </select>
            </div>
          )}
          </form>
          <button className="cs-modal-crime-compute" type="button"  onClick={() => this.compute()}>{Config[lang].modals.compute}</button>
          <button className="cs-modal-crime-close" type="button" onClick={() => hideModalCrime()}>{Config[lang].modals.close}</button>
        </div>
        <div className={this.state.hideWarrant ? 'cs-warrant' : 'cs-warrant cs-warrant-block'} >
          <div className="cs-warrant-inner">
              {
                this.state.suspicious.length > 1
                ? <div>{this.state.suspicious.length} {Config[lang].warrant.suspects} {this.state.suspicious.map((suspicious, i) => <div key={i}>{suspicious.name}</div>)}  </div>
                : ''
              } 
              { 
                this.state.suspicious.length === 0
                ? <div>{Config[lang].warrant.none}<br/>{Config[lang].warrant.nowarrant}</div>
                : ''
              }
              {
                this.state.suspicious.length === 1
                ? <div>
                    {Config[lang].warrant.arrestwarrant}<br/>
                    {Config[lang].warrant.arrest} {this.state.suspicious[0].name}
                    <br/><br/>
                    <img width="50" src={`https://julien-verkest.fr/carmen-sandiego-reactjs/assets/Dossiers/${this.state.suspicious[0].picture}`} alt=""  />
                  </div>
                : ''
              }
            <br/><br/><button onClick={() => this.setState({hideWarrant: true})}>{Config[lang].buttons.back}</button>
            <button className="cs-modal-crime-close" onClick={() => hideModalCrime()}>{Config[lang].modals.close}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Crime;