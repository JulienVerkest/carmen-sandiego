import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ModalDossiers from '../Modals/Dossiers';
import Dossiers from '../../Game/Data/Dossiers';
import Config from '../../Game/Data/Config';
import './index.css';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowModalDossier: false,
      lastOpenDossier: null
    }
  }

  showModalDossier = () => this.setState({isShowModalDossier: true})
  hideModalDossier = () => this.setState({isShowModalDossier: false})
  openModalDossier = (id) => {
    this.setState({lastOpenDossier: id});
    this.showModalDossier();
  } 

  render() {
    const { lang, user, changeLang } = this.props;
    const menu = Config[lang].menu;
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Carmen Sandiego {user}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title={menu.entry1.name} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">{menu.entry1.item1}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">{menu.entry1.item2}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">{menu.entry1.item3}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">{menu.entry1.item4}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={menu.entry2.name} id="basic-nav-dropdown">
                {Dossiers.map(dossier =>
                  <NavDropdown.Item key={dossier[lang].id} onClick={() => this.openModalDossier(dossier[lang].id)}>{dossier[lang].Name}</NavDropdown.Item>
                )}
              </NavDropdown>
              <NavDropdown title="Config" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => changeLang('en') }>{menu.entry3.item1}</NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item2} </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item3} </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
          this.state.isShowModalDossier 
          ? <ModalDossiers lang={lang} hideModalDossier={this.hideModalDossier} lastOpenDossier={this.state.lastOpenDossier}></ModalDossiers>
          : ''
        }
        
      </div>
    );
  }
} 

export default Menu;