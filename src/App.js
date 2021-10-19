import logo from './logo.svg';
import React, {Component} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Menu} from 'primereact/menu';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import MesAlertes from './MesAlertes';
import MesAsset from './MesAsset';
import MesContact from './MesContact';
import Profil from './Profil';

class App extends Component{

  constructor() {
      super();
      this.state = {
          items:[
              {
                  label:'MesAlertes',
                        command: () => {window.location = "#/"}
              },
              {
                label:'MesAsset',
                icon:'pi pi-power-off',
                command: () => {window.location = "#/MesAsset"}
               },
              {
                label:'MesContact',
                icon:'pi pi-power-off',
                command: () => {window.location = "#/MesContact"}
              },
              {
                  label:'Profil',
                  icon:'pi pi-info',
                  className: "p-menuitem-active",
                  command: () => {window.location = "#/Profil"}
              }             

          ]
      };
  }

  render()
  {
      return (
          <Router>
              <div className="App" >
                  <Sidebar position="left" visible={true} showCloseIcon={false} dismissable={false} modal={false}
                           style={{padding:0, width:'175px'}}>
                      <Menu model={this.state.items}
                            style={{width: '100%', height:'100%', marginTop:'60px'}}/>
                  </Sidebar>
                  <Sidebar position="top" visible={true} showCloseIcon={false} dismissable={false} modal={false}
                           style={{height:'70px', backgroundColor:'#5D5C61', textAlign:'left'}}>
                      <h2 style={{color:'white'}}>Pluvego</h2>
                  </Sidebar>
                  <div style={{marginTop:"68px",marginLeft:"175px", padding:'15px'}}>
                      <Switch>
                          <Route exact path="/" component={MesAlertes} />
                          <Route path="/MesAsset" component={MesAsset} />
                          <Route path="/MesContact" component={MesContact} />
                          <Route path="/Profil" component={Profil} />
                      </Switch>
                      </div>
                </div>
            </Router>
        );
    }
}

export default App;