import React from 'react';

import { storiesOf } from '@storybook/react';
import Dossiers from '../../GameData/Data//Dossiers';
import Config from '../../GameData/Data/Config';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Menu  from './';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//  <Menu user={user} step={step} saveStateToLocalStorage={this.saveStateToLocalStorage} hydratestateFromLocalStorage={this.hydratestateFromLocalStorage}  Dossiers={Dossiers} Config={Config} lang={lang} changeLang={this.changeLang} userRank={userRank}></Menu>
        

storiesOf('Menu', module)
  .add('with text', () => <Menu Dossiers={Dossiers} Config={Config} lang="en" userRank="Rookie"></Menu>);
