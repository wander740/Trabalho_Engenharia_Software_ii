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

				{/*----------- CADASTRO -----------
				        <span className="p-float-label">
          <InputText id="cadastroNome" />
          <label htmlhtmlFor="cadastro">Nome Completo</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText id="cadastroEmail" />
          <label htmlhtmlFor="cadastro">Email</label>
        </span>
        <br />
        <span className="p-float-label">
          <Password promptLabel="Digite uma Senha" weakLabel="Senha Fraca" mediumLabel="Senha Média" strongLabel="Senha Forte"/>
          <label htmlhtmlFor="cadastro">Senha</label>
        </span>
        <br />
        <span className="p-float-label">
        	<InputText id="cadastroSenhaSenha" />
          <label htmlhtmlFor="cadastro">Confirmar Senha</label>
        </span>
        <br />
        <span className="p-float-label">
						<InputMask id="cadastroCPF" mask="999.999.999-99"/>
						<label htmlhtmlFor="cadastro">CPF</label>
				</span>
        <br />
        <span className="p-float-label">
        	<InputText id="in" />
          <label htmlhtmlFor="cadastro">Endereço</label>
        </span>
        <br />
				<span className="p-float-label">
						<InputMask id="cadastroCelular" mask="(99) 99999-9999"/>
						<label htmlhtmlFor="cadastro">Nº Celular</label>
				</span>	
        <br />
        <Button label="Cadastrar" onClick={this}/>
        <br />
        <Button label="Voltar" onClick={this}/>
				*/}

							{/* ------ CADASTRO CONFIRMADO -------
			
			*/}


			{/* ------ HOME -------
				{IMAGEM 1}
			  <br />
				{IMAGEM 2}
				<br />
				<br />
        <Button label="Fazer Pedido" onClick={this}/>
        <br />
        <Button label="Status do Pedido" onClick={this}/>
        <br />
				<br />
        <Button label="Configuração" onClick={this}/>		
			*/}


			{/* ------ PEDIDO -------

			*/}


			{/* ------ PEDIDO CONCLUIDO -------

			*/}


			{/* ------ STATUS DO PEDIDO -------


			*/}

			{/* ------ CONFIGURAÇÃO -------

			*/}

			{/* ------ EDITAR PERFIL -------

			*/}

			{/* ------ EDITAR PERFIL CONCLUIDO -------

			*/}

      </header>
    </div>
  );
}

export default App;
