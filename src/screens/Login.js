import React from 'react';
import logo from './pizza.png';
import './Formatacao.css';
//------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
//importando button
//importando button
import { Button } from 'primereact/button';
//importando InputText
import { InputText } from 'primereact/inputtext';
//importando Password (coloca censura na senha e nível de força de segurança da senha)
import { Password } from 'primereact/password';

function Login({ navigation }) {
  return (
    <div className="Formatacao">
      <header className="Formatacao-header"> 
			  <img src={logo} className="Formatacao-logo"
        alt="logo" />
        <br />
        <span className="p-float-label">
          <InputText id="loginEmail" required={true}/>
          <label htmlhtmlfor="loginEmail">Digite seu e-mail</label>
        </span>
        <br />
        <span className="p-float-label">
          <Password id="loginSenha" feedback = {false} required={true}/>
          <label htmlhtmlfor="loginSenha">Digite sua Senha</label>
        </span>
        <br />
        <Button label="Login"/>
        <br />
        <Button label="Cadastro" onClick={() => navigation.navigate('Cadastro')}/>
      </header>
    </div>
  );
}

export default Login;
