import React from 'react';
import logo from './pizza.png';
import './App.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo"
        alt="logo" />
        <br />
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlhtmlFor="in">Digite o e-mail</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="in" />
          <label htmlhtmlFor="in">show</label>
        </span>
        <br />
        <Button label="Login" />
        <br />
        <Button label="Cadastro" />

      </header>
    </div>
  );
}

export default App;
