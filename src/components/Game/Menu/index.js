// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ModalDossiers from '../Modals/Dossiers';
import './index.css';

function Menu(props) {
  const [modalDossier, setModalDossier] = useState(true);
  const [lastOpenDossier, setLastOpenDossier] = useState(null);
  const { lang, user, userRank, changeLang, Dossiers, Config  } = props;
  const menu = Config[lang].menu;
  return(
    <div className="container cs-no-padding" >
      <Navbar bg="light" expand="lg">
        { /* <Navbar.Brand onClick={() => setHidden(true)}>Carmen Sandiego {user}</Navbar.Brand> } */ }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={menu.entry1.name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => window.location.reload()} >{menu.entry1.item2}</NavDropdown.Item>
              <NavDropdown.Item  disabled >{menu.entry1.item3}</NavDropdown.Item>
              <NavDropdown.Item disabled  >{menu.entry1.item4}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => alert('Julien Verkest 2019 - ReactJS')}>{menu.entry1.item1}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={menu.entry2.name} id="basic-nav-dropdown">
              {Dossiers.map(dossier =>
                <NavDropdown.Item key={dossier[lang].id} onClick={() => { setModalDossier(false); setLastOpenDossier(dossier[lang].id); }}>{dossier[lang].name}</NavDropdown.Item>
              )}
            </NavDropdown>
            <NavDropdown title="Config" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLang('en') }>{menu.entry3.item1}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item2} </NavDropdown.Item>
              {/*<NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item3} </NavDropdown.Item>*/}
            </NavDropdown>
            {/*<Nav.Link href="#link">?</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">
          {userRank} {user}
        </span>
      </Navbar>
      {
        !modalDossier 
        ? <ModalDossiers lang={lang} hideModalDossier={setModalDossier} lastOpenDossier={lastOpenDossier}></ModalDossiers>
        : ''
      }
      
    </div>
  );
}

// class Menu extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isShowModalDossier: false,
//       lastOpenDossier: null
//     }
//   }

//   showModalDossier = () => this.setState({isShowModalDossier: true})
//   hideModalDossier = () => this.setState({isShowModalDossier: false})
//   openModalDossier = (id) => {
//     this.setState({lastOpenDossier: id});
//     this.showModalDossier();
//   } 

//   render() {
//     const { lang, user, userRank, changeLang  } = this.props;
//     const menu = Config[lang].menu;
//     return(
//       <div className="container cs-no-padding" >
//         <Navbar bg="light" expand="lg">
//           {/*<Navbar.Brand href="#home">Carmen Sandiego {user}</Navbar.Brand>*/}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//               <NavDropdown title={menu.entry1.name} id="basic-nav-dropdown">
//                 <NavDropdown.Item onClick={() => window.location.reload()} >{menu.entry1.item2}</NavDropdown.Item>
//                 <NavDropdown.Item  disabled >{menu.entry1.item3}</NavDropdown.Item>
//                 <NavDropdown.Item disabled  >{menu.entry1.item4}</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item onClick={() => alert('Julien Verkest 2019 - ReactJS')}>{menu.entry1.item1}</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title={menu.entry2.name} id="basic-nav-dropdown">
//                 {Dossiers.map(dossier =>
//                   <NavDropdown.Item key={dossier[lang].id} onClick={() => this.openModalDossier(dossier[lang].id)}>{dossier[lang].name}</NavDropdown.Item>
//                 )}
//               </NavDropdown>
//               <NavDropdown title="Config" id="basic-nav-dropdown">
//                 <NavDropdown.Item onClick={() => changeLang('en') }>{menu.entry3.item1}</NavDropdown.Item>
//                 <NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item2} </NavDropdown.Item>
//                 {/*<NavDropdown.Item onClick={() => changeLang('fr') }>{menu.entry3.item3} </NavDropdown.Item>*/}
//               </NavDropdown>
//               {/*<Nav.Link href="#link">?</Nav.Link>*/}
//             </Nav>
//           </Navbar.Collapse>
//           <span className="navbar-text">
//             {userRank} {user}
//           </span>
//         </Navbar>
//         {
//           this.state.isShowModalDossier 
//           ? <ModalDossiers lang={lang} hideModalDossier={this.hideModalDossier} lastOpenDossier={this.state.lastOpenDossier}></ModalDossiers>
//           : ''
//         }
        
//       </div>
//     );
//   }
// } 

export default Menu;